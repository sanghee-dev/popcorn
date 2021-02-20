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
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: var(--space);
  transition: all 1s;
  overflow: hidden;
  height: ${(props) =>
    props.current
      ? `calc(${25 * props.count}vw + ${80 * props.count}px - 20px)`
      : "calc(25vw + 60px)"};
  border-radius: 20px;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  & h3:last-child {
    color: rgb(100, 100, 100);
  }
`;
const Image = styled.img`
  width: calc(25vw - 35px);
  height: calc(25vw - 35px);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: var(--half-space);
  filter: grayscale(100%);
  margin-bottom: var(--space);
`;
const Info = styled.div`
  width: calc(25vw - 35px);
  height: 75px;
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

const Credit = ({ title = "Credits", results }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);
  const count = results ? Math.ceil(results.length / 4) : 1;

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>{title}</Title>

      <DataContainer current={more} count={count}>
        {results &&
          results.map((result) => (
            <Data key={result.cast_id}>
              <Image
                imageUrl={
                  result.profile_path
                    ? `https://image.tmdb.org/t/p/original/${result.profile_path}`
                    : require("../assets/noPosterSmall.png").default
                }
              />
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
          <h4>More info</h4>
        </More>
      )}
    </Container>
  );
};

Credit.propTypes = {
  result: PropTypes.array,
};

export default Credit;
