import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  items-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.h1`
  font-weight: bold;
  margin-top: 12px;
  padding-top: 6px;
  border-top: 1px solid var(--color);
`;

const LinkStyle = styled.span`
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  -webkit-transition: border-bottom 0.3s ease 0.05s;
  transition: border-bottom 0.3s ease 0.05s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-bottom: 1px solid var(--color);
  }
`;

const NotFoundStyle = styled.div`
  width: 50%;
  height: 300px;
  object-fit: contain;
  position: relative;
`;

const NotFound = () => (
  <NotFoundStyle>
    <Image src="//NotFound.svg" alt="404 Icon" lazy="loading" layout="fill" objectFit="contain" />
  </NotFoundStyle>
);

const Link = ({ to, children }) => (
  <LinkStyle>
    <NextLink href={to}>{children}</NextLink>
  </LinkStyle>
);

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>ReVerse: Not Found</title>
      </Head>
      <Container>
        <NotFound />
        <Header>404, That's an error!</Header>
        <Link to="/">And here is a convenient link to the homepage.</Link>
      </Container>
    </>
  );
}
