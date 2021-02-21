import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: var(--space);
  margin-bottom: var(--space);
`;
const Title = styled.h1`
  margin-bottom: var(--quadruple-space);
  & h1 {
    margin-bottom: var(--space);
  }
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  transition: all 1s;
  overflow: hidden;
  height: ${(props) =>
    props.current
      ? // SubTitle + Image + Info
        `calc(${2 * 18 * props.count}px + 
        ${37.5 * props.count}vw + ${-112.5 * props.count}px + 
        ${4 * 18 * props.count}px + 
        ${100 * props.count}px + 
        ${-20}px
        )`
      : `calc(${2 * 18}px + 
        ${37.5}vw + ${-112.5}px + 
        ${4 * 18}px + 
        ${100}px + 
        ${-20}px
        )`};
`;
const Data = styled.div`
  width: calc(25vw - 35px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: var(--half-space);
  padding: var(--space);
  background-color: var(--gray);
  & h3:not(:first-child) {
    color: rgb(100, 100, 100);
  }
`;
const SubTitle = styled.div`
  height: calc(2 * var(--h3));
  margin-bottom: var(--space);
  & h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  filter: grayscale(100%);
  margin-bottom: var(--space);
  filter: ${(props) => (props.current ? "grayscale(40%)" : "grayscale(100%)")};
`;
const Info = styled.div`
  width: 100%;
  height: calc(4 * var(--h3));
  & h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & h3:first-child {
    -webkit-line-clamp: 1;
  }
  & h3:last-child {
    -webkit-line-clamp: 4;
    color: var(--dark-gray);
  }
`;
const More = styled.div`
  margin-top: var(--space);
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: realtive;
  top: 0;
  & :first-child {
    margin-right: 10px;
    font-size: 9px;
    position: relative;
    top: 3.5px;
  }
`;

const Collection = ({ results, currentId }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);
  const count = results ? Math.ceil(results.parts.length / 4) : 1;

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>
        <h1>Collection</h1>
        <h2>{results && results.overview}</h2>
      </Title>

      <DataContainer current={more} count={count}>
        {results &&
          results.parts.map((part, index) => (
            <Data key={part.id}>
              <SubTitle>
                <h3>{part.original_title.toUpperCase()}</h3>
              </SubTitle>
              <Image
                imageUrl={
                  part.poster_path
                    ? `https://image.tmdb.org/t/p/original/${part.poster_path}`
                    : require("../assets/noPosterSmall.png").default
                }
                current={part.id === currentId}
              />
              <Info>
                <h3>{part.overview}</h3>
              </Info>
            </Data>
          ))}
      </DataContainer>

      {count > 1 && (
        <More onClick={() => setMore((prev) => !prev)}>
          {more ? <IoEllipseOutline /> : <IoEllipse />}
          <h4>More info</h4>
        </More>
      )}
    </Container>
  );
};

Collection.propTypes = {
  results: PropTypes.object.isRequired,
};

export default Collection;
