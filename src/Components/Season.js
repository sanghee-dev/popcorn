import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import Checkerboard from "Components/Checkerboard";
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
  grid-gap: var(--space);
  transition: all 1s;
  overflow: hidden;
  height: ${(props) =>
    props.current
      ? // SubTitle + Image
        `calc(${1 * 18 * props.count}px + 
        ${37.5 * props.count}vw + ${-52.5 * props.count}px + 
        ${60 * props.count}px + 
        ${-20}px
        )`
      : `calc(${1 * 18}px + 
        ${37.5}vw + ${-52.5}px + 
        ${60}px + 
        ${-20}px
        )`};
`;
const Data = styled.div`
  width: calc(25vw - 35px);
  height: 100%;
  display: flex;
  flex-direction: column;
  & h3:not(:first-child) {
    color: rgb(100, 100, 100);
  }
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: var(--half-space);
  filter: grayscale(100%);
  filter: ${(props) => (props.current ? "grayscale(25%)" : "grayscale(100%)")};
`;
const CheckerContainer = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
`;
const SubTitle = styled.div`
  width: 100%;
  height: calc(1 * var(--h3));
  margin-bottom: var(--space);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: var(--space);
`;
const More = styled.div`
  margin-top: var(--space);
  display: flex;
  justify-content: center;
  cursor: pointer;
  & :first-child {
    margin-right: 10px;
    font-size: 9px;
    position: relative;
    top: 3.5px;
  }
`;

const Seasons = ({ results, currentId }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);
  const count = results ? Math.ceil(results.length / 4) : 1;

  console.log(results, currentId);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>
        <h1>Seasons</h1>
      </Title>

      <DataContainer current={more} count={count}>
        {results &&
          results.map((result, index) => (
            <Data key={result.id}>
              {result.poster_path ? (
                <Image
                  imageUrl={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                  current={index === currentId - 1}
                />
              ) : (
                <CheckerContainer>
                  <Checkerboard halfRadius={true} />
                </CheckerContainer>
              )}
              <SubTitle>
                <h3>{result.name.toUpperCase()}</h3>
              </SubTitle>
            </Data>
          ))}
      </DataContainer>

      {count > 1 && (
        <More onClick={() => setMore((prev) => !prev)}>
          {more ? <IoEllipseOutline /> : <IoEllipse />}
          <h4>More seasons</h4>
        </More>
      )}
    </Container>
  );
};

Seasons.propTypes = {
  results: PropTypes.array.isRequired,
  currentId: PropTypes.number.isRequired,
};

export default Seasons;
