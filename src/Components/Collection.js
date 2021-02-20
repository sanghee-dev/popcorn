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
  & h1 {
    margin-bottom: var(--space);
  }
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
      ? // PartTitle*c + Image*c + Info*c + 60*c
        `calc(${2 * 22 * props.count}px + 
          ${37.5 * props.count}vw + ${-56.25 * props.count}px 
        + ${18 * 4 * props.count}px + ${60 * props.count}px)`
      : // PartTitle + Image height + 20px + Info
        "calc(2 * 22px + 37.5vw - 56.25px + 20px + 4 * 18px)"};
`;

const Data = styled.div`
  width: calc(25vw - 35px);
  height: calc(2 * var(--h2) + 37.5vw - 56.25px + 20px);
  display: flex;
  flex-direction: column;
  & h3:not(:first-child) {
    color: rgb(100, 100, 100);
  }
  box-sizing: border-box;
  border-radius: var(--space);
  /* padding: var(--space); */
  background-color: var(--gray);
`;
const PartTitle = styled.div`
  height: calc(2 * var(--h2));
  & h2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
  filter: ${(props) => (props.current ? "grayscale(25%)" : "grayscale(100%)")};
`;
const Info = styled.div`
  width: calc(25vw - 35px);
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
    -webkit-line-clamp: 3;
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

const Collection = ({ results, currentId }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);
  const count = results ? Math.ceil(results.parts.length / 4) : 1;

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  console.log(currentId);
  console.log(results);

  return (
    <Container ref={containerRef}>
      <Title>
        <h1>Collection</h1>
        <h2>{results && results.overview}</h2>
      </Title>

      <DataContainer current={more} count={count}>
        {results &&
          results.parts.map((part) => (
            <Data key={part.id}>
              <PartTitle>
                <h3>{part.original_title}</h3>
              </PartTitle>
              <Image
                imageUrl={
                  part.poster_path
                    ? `https://image.tmdb.org/t/p/original/${part.poster_path}`
                    : require("../assets/noPosterSmall.png").default
                }
                current={part.id === currentId}
              />
              <Info>
                <h3>
                  {part.release_date &&
                    part.release_date.substring(0, 7).replace(/-/g, "/")}
                </h3>
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
