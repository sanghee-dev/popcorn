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
  margin-bottom: var(--space);
  transition: all 0.5s;
  overflow: hidden;
  height: ${(props) =>
    props.current
      ? // height: Image*count + Info*count + 40px*count - 20px
        `calc(${37.5 * props.count}vw + ${-56.25 * props.count}px 
        + ${44 * props.count}px + ${40 * props.count}px - 20px)`
      : // Image height + 20px + Info
        "calc(37.5vw - 56.25px + 20px + 44px)"};
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  & h3:not(:first-child) {
    color: rgb(100, 100, 100);
  }
`;
const Image = styled.img`
  width: calc(25vw - 35px);
  height: calc(37.5vw - 56.25px);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  filter: grayscale(100%);
  margin-bottom: var(--space);
`;
const Info = styled.div`
  width: calc(25vw - 35px);
  height: calc(2 * var(--h2));
  & h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const More = styled.div`
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
              <Image
                imageUrl={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                    : require("../assets/noPosterSmall.png").default
                }
              />
              <Info>
                <h3>{result.name}</h3>
                <h3>
                  {result.air_date &&
                    result.air_date.substring(0, 7).replace(/-/g, "/")}
                </h3>
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

Seasons.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Seasons;
