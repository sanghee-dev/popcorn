import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import Checkerboard from "Components/Checkerboard";

const Container = styled.div`
  width: 100%;
  height: calc(100vw - 40px);
  margin-bottom: var(--space);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Column = styled.div``;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--quadruple-space);
  z-index: 3;
  padding: 0 var(--space);
  position: relative;
  bottom: calc(100vw - 60px);
`;
const SliderContainer = styled.div`
  width: 100%;
  height: calc(100vw - 40px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--space);
  position: relative;
  z-index: 2;
`;
const Slider = styled.div`
  width: 100%;
  border-radius: var(--space);
  padding: 105px var(--space) 0;
  background: linear-gradient(rgba(0, 255, 84, 1) 0%, rgba(0, 255, 84, 0) 100%);
  :nth-child(2n) {
    background: linear-gradient(
      rgba(0, 255, 84, 0) 0%,
      rgba(0, 255, 84, 1) 100%
    );
  }
`;
const ImageContainer = styled(Link)`
  width: 100%;
`;
const ImageTitle = styled.h1`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: var(--space);
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: var(--half-space);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  margin-bottom: var(--space);
`;
const CheckerContainer = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
`;
const Overview = styled.div`
  width: 100%;
  height: calc(8 * var(--h3));
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  padding: 0 var(--space);
  position: relative;
  bottom: 150px;
`;
const Button = styled.button`
  all: unset;
  width: 33%;
  :first-child {
    margin-right: auto;
    cursor: pointer;
    text-align: left;
  }
  :nth-child(2) {
    text-align: center;
  }
  :last-child {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

const PersonSlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const count = data.length;

  useEffect(() => {
    // Gradient(containerRef);
  }, [index, count]);

  return (
    <Container ref={containerRef}>
      <Column>
        <SliderContainer>
          {data[index].known_for.map((media) => (
            <Slider key={media.id}>
              <ImageTitle>
                <h1>{media.original_title}</h1>
              </ImageTitle>
              {media.poster_path ? (
                <ImageContainer
                  to={
                    media.media_type === "movie"
                      ? `/movie/${media.id}`
                      : `/tv/${media.id}`
                  }
                >
                  <Image
                    key={media.id}
                    imageUrl={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
                    current={media.poster_path}
                  />
                </ImageContainer>
              ) : (
                <CheckerContainer>
                  <Checkerboard />
                </CheckerContainer>
              )}
              <Overview>
                <h3>{media.overview}</h3>
              </Overview>
            </Slider>
          ))}
        </SliderContainer>

        <Info>
          <h1>
            {data[index].gender === 1 ? "Actress: " : "Actor: "}
            {data[index].name}
          </h1>
        </Info>
      </Column>

      <ButtonContainer>
        <Button onClick={() => setIndex(index === 0 ? count - 1 : index - 1)}>
          <h1>Previous</h1>
        </Button>
        <Button>
          <h1>{count > 2 ? `${index + 1} / ${count}` : ""}</h1>
        </Button>
        <Button onClick={() => setIndex(index === count - 1 ? 0 : index + 1)}>
          <h1>Next</h1>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

PersonSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PersonSlider;
