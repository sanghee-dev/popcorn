import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: 100%;
  margin-bottom: 20px;
  padding: var(--space);
  display: flex;
  justify-content: space-between;
  border: 1px dotted black;
  border-radius: 20px;
  &:hover {
    background-color: var(--green);
  }
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
  display: flex;
  height: 600px;
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.2s;
`;
const Image = styled.img`
  width: 100%;
  height: 600px;
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
`;

const ImageSlider = ({ title, movies, reverse = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  const SLIDES = movies.length;

  useEffect(() => {
    containerRef.current.style.flexDirection = reverse ? "row-reverse" : "row";
    containerRef.current.style.textAlign = reverse ? "right" : "left";
    sliderRef.current.style.width = `${SLIDES * 400}px`;
    sliderRef.current.style.transform = `translateX(-${currentSlide * 400}px)`;
  }, [currentSlide]);

  return (
    <Container ref={containerRef}>
      <Column>
        <h1>{title}</h1>
        <h1>
          {currentSlide + 1} / {SLIDES}
        </h1>
      </Column>

      <Column>
        <Slider ref={sliderRef}>
          {movies.map((movie) => (
            <Image
              key={movie.id}
              ref={imageRef}
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
              setCurrentSlide(currentSlide === 0 ? SLIDES : currentSlide - 1)
            }
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentSlide(currentSlide > SLIDES - 1 ? 0 : currentSlide + 1)
            }
          >
            Next
          </Button>
        </ButtonContainer>
      </Column>
    </Container>
  );
};

ImageSlider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ImageSlider;
