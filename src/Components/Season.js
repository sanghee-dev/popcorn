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
  margin-bottom: 80px;
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  transition: all 0.5s;
  overflow: hidden;
  height: ${(props) =>
    props.current
      ? // SubTitle + Image
        `calc(${18 * props.count}px + 
        ${37.5 * props.count}vw + ${-112.5 * props.count}px + 
        ${80 * props.count}px + 
        ${-20}px
        )`
      : `calc(${18}px + 
        ${37.5}vw + ${-112.5}px + 
        ${80}px + 
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
  height: calc(1 * var(--h3));
  margin-bottom: var(--space);
  & h3 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Image = styled.img`
  width: calc(25vw - 75px);
  height: calc((25vw - 75px) * 1.5);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  filter: grayscale(100%);
  filter: ${(props) => (props.current ? "grayscale(25%)" : "grayscale(100%)")};
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

const Seasons = ({ results }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);
  const count = results ? Math.ceil(results.length / 4) : 1;

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  console.log(results);

  return (
    <Container ref={containerRef}>
      <Title>
        <h1>Seasons</h1>
        {/* <h2>{results.overview}</h2> */}
      </Title>

      <DataContainer current={more} count={count}>
        {results &&
          results.map((result) => (
            <Data key={result.id}>
              <SubTitle>
                <h3>{result.name.toUpperCase()}</h3>
              </SubTitle>
              <Image
                imageUrl={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                    : require("../assets/noPosterSmall.png").default
                }
              />
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

Seasons.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Seasons;
