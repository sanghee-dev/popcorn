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
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: var(--space);
  transition: all 1s;
  overflow: hidden;
  height: ${(props) =>
    props.current
      ? // Image + Info
        `calc(${25 * props.count}vw + ${-35 * props.count}px + 
        ${4 * 18 * props.count}px + 
        ${40 * props.count}px + 
        ${-45}px
        )`
      : `calc(${25}vw + ${-35}px + 
        ${4 * 18}px + 
        ${40}px + 
        ${-20}px
        )`};
`;
const Data = styled.div`
  width: calc(25vw - 40px);
  height: 100%;
  display: flex;
  flex-direction: column;
  & h3:last-child {
    color: rgb(100, 100, 100);
  }
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: var(--half-space);
  filter: grayscale(100%);
`;
const CheckerContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
`;
const Info = styled.div`
  width: 100%;
  height: calc(4 * var(--h3));
  margin-top: var(--space);
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
  & :first-child {
    margin-right: 10px;
    font-size: 9px;
    position: relative;
    top: 3.5px;
  }
`;

const Credit = ({ results, title = "Credits", currentId }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);
  const count = results ? Math.ceil(results.length / 4) : 1;

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef} key={currentId}>
      <Title>{title}</Title>

      <DataContainer current={more} count={count} key={currentId}>
        {results &&
          results.map((result) => (
            <Data key={result.cast_id}>
              {result.profile_path ? (
                <Image
                  imageUrl={`https://image.tmdb.org/t/p/original/${result.profile_path}`}
                />
              ) : (
                <CheckerContainer>
                  <Checkerboard halfRadius={true} />
                </CheckerContainer>
              )}
              <Info>
                <h3>{result.character}</h3>
                <h3>{result.original_name}</h3>
              </Info>
            </Data>
          ))}
      </DataContainer>

      {count > 1 && (
        <More onClick={() => setMore((prev) => !prev)}>
          {more ? <IoEllipseOutline /> : <IoEllipse />}
          <h4>{more ? "Close" : "Show Description"}</h4>
        </More>
      )}
    </Container>
  );
};

Credit.propTypes = {
  results: PropTypes.array.isRequired,
  title: PropTypes.string,
  currentId: PropTypes.number.isRequired,
};

export default Credit;
