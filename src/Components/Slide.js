import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: 100%;
  padding: var(--space);
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px dotted black;
  border-radius: 20px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :first-child {
  }
  :last-child {
    width: 80%;
    overflow: hidden;
  }
`;
const Slider = styled.div`
  width: 100%;
  display: flex;
  border: 1px dotted red;
  border-radius: 20px;
`;
const Slide = styled.img`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 28px;
  transition: all 0.2s;
  &:hover {
    color: var(--green);
  }
`;

const Section = ({ title, movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = movies.length;

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <Column>
        <h1>{title}</h1>
        <h1>
          {currentSlide} / {TOTAL_SLIDES}
        </h1>
      </Column>

      <Column>
        <Slider ref={slideRef}>
          {movies.map((movie) => (
            <Slide
              imageUrl={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : require("../assets/noPosterSmall.png").default
              }
            />
          ))}
        </Slider>
        <ButtonContainer>
          <Button
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? TOTAL_SLIDES : currentSlide - 1
              )
            }
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentSlide(
                currentSlide >= TOTAL_SLIDES ? 0 : currentSlide + 1
              )
            }
          >
            Next
          </Button>
        </ButtonContainer>
      </Column>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
