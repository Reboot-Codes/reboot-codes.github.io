import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 12px;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(127.5, 127.5, 127.5, 0.8);

  &:hover {
    background-color: var(--green-300);
    color: var(--black);
    border-color: rgba(127.5, 127.5, 127.5, 0);
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 100px;
  object-fit: contain;
  position: relative;
`;

const Header = styled.a`
  font-size: var(--step-up-2);
  font-weight: bold;
`;

const Text = styled.p`
  font-size: var(--step-up-1);
`;

export default function PostItem({ article }) {
  let imageUrl = undefined;
  if (article.ogImage) {
    if (article.ogImage.url) {
      imageUrl = article.ogImage.url;
    }
  }

  return (
    <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
      <PostContainer className="transition">
        {/*imageUrl ? (
          <PostImage>
            <Image src={imageUrl} alt="Post image" lazy="loading" layout="fill" objectFit="contain" />
          </PostImage>
        ) : (
          <></>
        )*/}
        <Header>{article.title}</Header>
        <Text>{article.description}</Text>
        <Text>
          <span>{article.timeReading.text}</span> • <span>{dayjs(article.date).format('MMM DD, YYYY')}</span>
        </Text>
      </PostContainer>
    </Link>
  );
}
