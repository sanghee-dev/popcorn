import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vw - 60px);
  margin-bottom: 20px;
  padding: var(--space);
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :first-child {
    margin-right: 20px;
    order: 2;
  }
  :last-child {
    overflow: hidden;
  }
`;
const Info = styled.div`
  & :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Slider = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.2s;
`;
const Poster = styled(Link)`
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

const ImageSlider = ({ title, data, isMovie = true, reverse = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  const sliderColumnRef = useRef(null);
  const SLIDES = data.length;

  useEffect(() => {
    const styleRef = () => {
      containerRef.current.style.gridTemplateColumns = reverse
        ? "2fr 1fr"
        : "1fr 2fr";
      sliderColumnRef.current.style.order = reverse ? "1" : "3";
      containerRef.current.style.textAlign = reverse ? "right" : "left";
      sliderRef.current.style.width = `${SLIDES * 400}px`;
      sliderRef.current.style.transform = `translateX(-${
        currentSlide * 400
      }px)`;
    };
    styleRef();

    Gradient(containerRef);
  }, [currentSlide, SLIDES, reverse]);

  return (
    <Container ref={containerRef}>
      <Column>
        <Info>
          <h1>{title}</h1>
          <h2>
            {isMovie
              ? data[currentSlide].original_title
              : data[currentSlide].original_name
              ? data[currentSlide].original_name
              : data[currentSlide].original_title}
          </h2>
        </Info>
        <h1>
          {currentSlide + 1} / {SLIDES}
        </h1>
      </Column>

      <Column ref={sliderColumnRef}>
        <Slider ref={sliderRef}>
          {data.map((movie) => (
            <>
              <Poster
                key={movie.id}
                to={isMovie ? `/movie/${movie.id}` : `/tv/${movie.id}`}
              >
                <Image
                  key={movie.id}
                  ref={imageRef}
                  imageUrl={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : require("../assets/noPosterSmall.png").default
                  }
                />
              </Poster>
            </>
          ))}
        </Slider>
        <ButtonContainer>
          <Button
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? SLIDES - 1 : currentSlide - 1
              )
            }
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentSlide(
                currentSlide === SLIDES - 1 ? 0 : currentSlide + 1
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

ImageSlider.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isMovie: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default ImageSlider;

// import ImageSlider from "Components/ImageSlider";
// {Object && Object.length > 0 && (
//   <ImageSlider
//     title="Object Title"
//     data={Object}
//     isMovie={true}
//     reverse={false}
//   />
// )}
