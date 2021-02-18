import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import Slider from "Components/Slider";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vw - 60px);
  margin-bottom: 20px;
  padding: var(--space);
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

const ImageSlider = ({ title, data, isMovie = true, reverse = false }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const sliderColumnRef = useRef(null);
  const count = data.length;

  useEffect(() => {
    const styleRef = () => {
      containerRef.current.style.gridTemplateColumns = reverse
        ? "2fr 1fr"
        : "1fr 2fr";
      sliderColumnRef.current.style.order = reverse ? "1" : "3";
      containerRef.current.style.textAlign = reverse ? "right" : "left";
    };
    styleRef();

    Gradient(containerRef);
  }, [index, count, reverse]);

  return (
    <Container ref={containerRef}>
      <Column>
        <Info>
          <h1>{title}</h1>
          <h2>
            {isMovie
              ? data[index].original_title
              : data[index].original_name
              ? data[index].original_name
              : data[index].original_title}
          </h2>
        </Info>
        <h1>
          {index + 1} / {count}
        </h1>
      </Column>

      <Column ref={sliderColumnRef}>
        <Slider
          data={data}
          isMovie={isMovie}
          index={index}
          setIndex={setIndex}
        />
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
