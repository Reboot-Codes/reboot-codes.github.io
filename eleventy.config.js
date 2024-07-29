const sass = require("sass");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
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

	eleventyConfig.addCollection(
		"allPosts",
		function (collectionApi) {
			return collectionApi.getFilteredByTags("post").sort((a, b) => (b.date - a.date));
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
