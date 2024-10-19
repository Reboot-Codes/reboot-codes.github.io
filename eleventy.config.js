const sass = require("sass");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const timeToRead = require('eleventy-plugin-time-to-read');
const markdownItExternalAnchor = require('markdown-it-external-anchor');
const prism = require('markdown-it-prism');

module.exports = function (eleventyConfig) {
	const md = markdownIt({ "html": true }).use(markdownItAnchor, { 
		"level": 2,
		permalink: markdownItAnchor.permalink.headerLink()
	}).use(markdownItExternalAnchor, {
		class: "link-external"
	}).use(prism, {
		highlightInlineCode: true,
		plugins: [
			"copy-to-clipboard",
			"show-language",
			"inline-color",
			"toolbar"
		]
	});

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addTemplateFormats("scss");
	// Creates the extension for use
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css", // optional, default: "html"

		// `compile` is called once per .scss file in the input directory
		compile: async function (inputContent) {
			let result = sass.compileString(inputContent);

			// This is the render function, `data` is the full data cascade
			return async (data) => {
				return result.css;
			};
		},
	});

	eleventyConfig.addPlugin(timeToRead, {
    speed: '250 words a minute'
  });

	eleventyConfig.addCollection(
		"allPosts",
		function (collectionApi) {
			return collectionApi.getFilteredByTags("post").sort((a, b) => (b.date - a.date)).filter((a) => {
				return a.data.published != false;
			});
		}
	);

	eleventyConfig.addCollection(
		"allProjects",
		function (collectionApi) {
			return collectionApi.getFilteredByTags("project").sort((a, b) => (b.date - a.date));
		}
	);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "allPosts",
			limit: 0,
		},
		metadata: {
			language: "en",
			title: "Reboot/Fitz's Blog",
			subtitle: "Bleh",
			base: "https://www.reboot-codes.com/",
			author: {
				name: "Reboot/Fitz",
				email: "hello@reboot-codes.com"
			}
		}
	});

	eleventyConfig.addFilter("startsWith", function(str, comp) {
		return str.startsWith(comp);
	});

	eleventyConfig.addFilter("strSlice", function(str, num) {
		return str.slice(num);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "post", "allPosts", "project", "allProjects", "featuredProject"].indexOf(tag) === -1).filter((tag) => (!(tag.startsWith("project:"))));
	});

	const parseDate = (str) => {
    if (str instanceof Date) {
      return str;
    }
    return Date.parse(str);
  };

  const formatPart = (part, date) =>
  new Intl.DateTimeFormat("en", part).format(date);

	eleventyConfig.addFilter("formatDate", async (obj) => {
    if (!obj) {
      return "";
    }
    const date = parseDate(obj);

    const month = formatPart({ month: "short" }, date);
    const day = formatPart({ day: "numeric" }, date);
    const year = formatPart({ year: "numeric" }, date);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    if (hours != 0 && minutes != 0) {
      return `${month} ${day}, ${year} - ${hours}:${minutes} UTC`;
    }

    return `${month} ${day}, ${year}`;
  });

	eleventyConfig.addPassthroughCopy({"src/public": "/"});

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
			layouts: "_includes/layouts",
    },
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk"
  }
};
