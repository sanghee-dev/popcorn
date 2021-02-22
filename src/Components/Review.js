import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--space);
  padding: var(--space);
  margin-bottom: var(--space);
`;
const ArticleContainer = styled.div`
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
  height: calc(8 * var(--h3));
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 1s;
`;
const More = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: var(--double-space) 0 var(--space);
  :last-child {
    margin-bottom: 0;
  }
  & :first-child {
    margin-right: 10px;
    font-size: 9px;
    position: relative;
    top: 3.5px;
  }
`;

const Review = ({ result }) => {
  const [moreFirst, setMoreFirst] = useState(false);
  const [moreSecond, setMoreSecond] = useState(false);
  const [moreThird, setMoreThird] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>Review</Title>

      {result && result.length > 0 && (
        <>
          <ArticleContainer>
            {result
              .slice(0, result.length < 4 ? result.length : 4)
              .map((article) => (
                <>
                  <Article key={article.id}>
                    <Author>
                      <h3>{article.author}</h3>
                    </Author>

                    <Content
                      current={moreFirst}
                      style={{
                        height: moreFirst
                          ? "calc(20 * var(--h3))"
                          : "calc(8 * var(--h3))",
                        "-webkit-line-clamp": moreFirst ? "20" : "8",
                      }}
                    >
                      <h3>{article.content}</h3>
                    </Content>
                  </Article>
                </>
              ))}
          </ArticleContainer>
          <More onClick={() => setMoreFirst((prev) => !prev)}>
            {moreFirst ? <IoEllipseOutline /> : <IoEllipse />}
            <h4>{moreFirst ? "Close" : "Show Description"}</h4>
          </More>
        </>
      )}

      {result && result.length > 4 && (
        <>
          <ArticleContainer>
            {result
              .slice(4, result.length < 8 ? result.length : 8)
              .map((article) => (
                <>
                  <Article>
                    <Author>
                      <h2>{article.author}</h2>
                    </Author>

                    <Content
                      current={moreSecond}
                      style={{
                        height: moreSecond
                          ? "calc(20 * var(--h3))"
                          : "calc(8 * var(--h3))",
                        "-webkit-line-clamp": moreSecond ? "20" : "8",
                      }}
                    >
                      <h3>{article.content}</h3>
                    </Content>
                  </Article>
                </>
              ))}
          </ArticleContainer>
          <More onClick={() => setMoreSecond((prev) => !prev)}>
            {moreSecond ? <IoEllipseOutline /> : <IoEllipse />}
            <h4>{moreSecond ? "Close" : "Show Description"}</h4>
          </More>
        </>
      )}

      {result && result.length > 8 && (
        <>
          <ArticleContainer>
            {result.slice(8, result.length).map((article) => (
              <>
                <Article>
                  <Author>
                    <h2>{article.author}</h2>
                  </Author>

                  <Content
                    current={moreThird}
                    style={{
                      height: moreThird
                        ? "calc(24 * var(--h3))"
                        : "calc(8 * var(--h3))",
                      "-webkit-line-clamp": moreThird ? "24" : "8",
                    }}
                  >
                    <h3>{article.content}</h3>
                  </Content>
                </Article>
              </>
            ))}
          </ArticleContainer>
          <More onClick={() => setMoreThird((prev) => !prev)}>
            {moreThird ? <IoEllipseOutline /> : <IoEllipse />}
            <h4>{moreThird ? "Close" : "Show Description"}</h4>
          </More>
        </>
      )}
    </Container>
  );
};

Review.propTypes = {
  result: PropTypes.array,
};

export default Review;
