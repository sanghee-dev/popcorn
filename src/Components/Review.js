import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--space);
  padding: var(--space);
  margin-bottom: var(--space);
`;
const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: var(--space);
`;
const Title = styled.h1`
  margin-bottom: var(--quadruple-space);
`;
const Article = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray);
  border-radius: var(--space);
  padding: var(--space);
  overflow: hidden;
`;
const Author = styled.div`
  width: 100%;
  margin-bottom: var(--space);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Content = styled.div`
  width: 100%;
  height: calc(6 * var(--h3));
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dark-gray);
`;

const Review = ({ result }) => {
  const containerRef = useRef(null);

  console.log(result);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>Review</Title>
      <ContentContainer>
        {result &&
          result.map((author) => (
            <Article>
              <Author>
                <h3>{author.author}</h3>
              </Author>
              <Content>
                <h3>{author.content}</h3>
              </Content>
            </Article>
          ))}
      </ContentContainer>
    </Container>
  );
};

Review.propTypes = {
  result: PropTypes.array,
};

export default Review;
