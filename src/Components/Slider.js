import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Column = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 20px;
`;
const SliderContainer = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 20px;
  transition: all 0.2s;
`;
const ImageLink = styled(Link)`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
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

const Slider = ({
  data,
  hasLink = false,
  isMovie = true,
  gradient = false,
  currentSlide,
  setCurrentSlide,
}) => {
  const containerRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const SLIDES = data.length;

  useEffect(() => {
    const styleRef = () => {
      sliderContainerRef.current.style.width = `${SLIDES * 400}px`;
      sliderContainerRef.current.style.transform = `translateX(-${
        currentSlide * 400
      }px)`;
    };
    styleRef();

    if (gradient) {
      Gradient(containerRef);
    }
  }, [currentSlide, SLIDES, gradient]);

  return (
    <Container ref={containerRef}>
      <Column>
        <SliderContainer ref={sliderContainerRef}>
          {data.map((movie) => (
            <>
              <ImageLink
                key={movie.id}
                to={
                  hasLink && isMovie ? `/movie/${movie.id}` : `/tv/${movie.id}`
                }
              >
                <Image
                  key={movie.id}
                  imageUrl={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : require("../assets/noPosterSmall.png").default
                  }
                />
              </ImageLink>
            </>
          ))}
        </SliderContainer>
      </Column>

      <ButtonContainer>
        <Button
          onClick={() =>
            setCurrentSlide(currentSlide === 0 ? SLIDES - 1 : currentSlide - 1)
          }
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setCurrentSlide(currentSlide === SLIDES - 1 ? 0 : currentSlide + 1)
          }
        >
          Next
        </Button>
      </ButtonContainer>
    </Container>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  isLink: PropTypes.bool,
  isMovie: PropTypes.bool,
};

export default Slider;
