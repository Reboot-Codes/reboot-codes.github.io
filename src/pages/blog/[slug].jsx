import React from 'react';
import readingTime from 'reading-time';
import reHypeExternalLinks from 'rehype-external-links';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { NextSeo } from 'next-seo';
import dayjs from 'dayjs';

// import MDXComponents from "src/components/MDXComponents/MDXComponents";
import Post from '../../components/Post/Post';
import { api } from '../../lib/lib';

export default function Slug({ readingTime, frontMatter, slug, source }) {
  const content = hydrate(source);
  const ogObj = frontMatter.ogImage
    ? frontMatter.ogImage.url
      ? {
          images: [
            {
              url: `https://www.reboot-codes.com${
                frontMatter.ogImage.url.startsWith('/') ? frontMatter.ogImage.url : `/${frontMatter.ogImage.url}`
              }`
            }
          ]
        }
      : undefined
    : undefined;

  return (
    <div>
      <NextSeo title={`ReVerse: ${frontMatter.title}`} description={frontMatter.description} openGraph={ogObj} />
      <Post
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        date={dayjs(frontMatter.date).format('MMM DD, YYYY')}
        content={content}
        ogImage={frontMatter.ogImage}
        slug={slug}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { content, data } = api.getRawArticleBySlug(params.slug);

  const mdxSource = await renderToString(content, {
    // components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        await import('remark-autolink-headings'),
        await import('remark-slug'),
        await import('remark-code-titles'),
        await import('remark-autolink-headings'),
        await import('remark-capitalize'),
        await import('remark-code-titles'),
        await import('remark-images'),
        await import('remark-slug'),
        await import('remark-gfm')
      ],
      rehypePlugins: [reHypeExternalLinks]
    }
  });

  const tags = data.tags ?? [];
  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
      tags
    }
  };
}

export async function getStaticPaths() {
  const articles = api.getAllArticles(['slug']);
  return {
    paths: articles.map((articles) => {
      return {
        params: {
          slug: articles.slug
        }
      };
    }),
    fallback: false
  };
}
