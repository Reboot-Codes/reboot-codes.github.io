import React from 'react';
import Header from './PostHeader';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 80ch;
  width: 80ch;
  text-align: left;
  font-size: var(--step-up-1);

  @media (max-width: 80ch) {
    width: 100%;
  }
`;

const Post = ({ readingTime, title, description, date, ogImage, content }) => {
  return (
    <Container>
      <Content className="md-block">
        <Header readingTime={readingTime} title={title} description={description} date={date} ogImage={ogImage} />
        {content}
      </Content>
    </Container>
  );
};

export default Post;
