import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import PostItem from '../../components/Post/PostItem';
import { api } from '../../lib/lib';

const Posts = styled.div`
  display: grid;
  gap: 12px;
  margin: 32px 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1084px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PostsHeading = styled.h1`
  font-weight: bold;
`;

const RSSLink = styled.a`
  text-decoration: underline;
`;

export default function Blog({ articles }) {
  return (
    <>
      <Head>
        <title>ReVerse: Blog</title>
      </Head>
      <PostsHeading>Checkout the Blog.</PostsHeading>
      <p>
        This is the part that uses MDX, it took a while to get it working. But, it works now!{' '}
        <RSSLink href="/feed.rss" target="_blank">
          Here's a link to the RSS feed.
        </RSSLink>
      </p>
      <Posts>
        {articles.map((article) => (
          <PostItem key={article.slug} article={article} />
        ))}
      </Posts>
    </>
  );
}

export const getStaticProps = async () => {
  const articles = api.getAllArticles([
    'slug',
    'title',
    'description',
    'date',
    'coverImage',
    'excerpt',
    'timeReading',
    'ogImage',
    'content'
  ]);

  return {
    props: { articles }
  };
};
