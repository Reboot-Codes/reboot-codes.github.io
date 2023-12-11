import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  align-items: center;

  min-height: 600px !important;

  @media (min-width: 834px) {
    flex-direction: row;
    height: calc(100vh - 32px);
  }
`;

const SideSection = styled.div`
  padding-bottom: 32px;

  @media (min-width: 1084px) {
    min-width: 450px;
  }
`;

const SideHeader = styled.h1`
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 12px;
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
`;

const Method = styled.a`
  border: 1px solid rgba(127.5, 127.5, 127.5, 0.8);
  border-radius: 5px;
  padding: 12px;

  &:hover {
    background-color: var(--green-300);
    color: var(--black);
    border-color: rgba(127.5, 127.5, 127.5, 0);
  }
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Reboot-Codes: Contact</title>
      </Head>
      <ContactSection>
        <SideSection>
          <SideHeader>Contact Me...</SideHeader>
          <p>
            Hey, looks like you want to get in touch! Well, you've come to the right place. Click on your favorite
            method and let the fancy links take you to where you want to go.
          </p>
        </SideSection>
        <Content>
          <Method className="transition" href="mailto:hello@reboot-codes.com" target="_blank">
            <h1>Using Email...</h1>
            <p>A tried and true (to the golden age of self-hosted websites) method of communication.</p>
          </Method>
          <Method className="transition" href="https://matrix.to/#/@reboot-hasmatrix:matrix.org" target="_blank">
            <h1>Using Matrix...</h1>
            <p>A new way of instant messaging, quite similar to email actually.</p>
          </Method>
          <Method className="transition" href="https://github.com/Reboot-Codes" target="_blank">
            <h1>Using GitHub...</h1>
            <p>Not really a way to contact me, but you might just want to checkout the source for something.</p>
          </Method>
        </Content>
      </ContactSection>
    </>
  );
}
