import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import Checkerboard from "Components/Checkerboard";

const Container = styled.div`
  width: 100%;
  height: calc(100vw - 60px);
  padding: var(--space);
  margin-bottom: var(--space);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Column = styled.div``;
const Info = styled.div`
  width: 100%;
  /* height: calc(33.3vw - 40px); */
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--quadruple-space);
`;
const Profile = styled.img`
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: var(--half-space);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  filter: grayscale(100%);
`;
const SliderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--space);
`;
const Slider = styled.div`
  width: calc(33.3vw - 45px);
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
  color: var(--dark-gray);
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    const styleRef = () => {};
    styleRef();

    Gradient(containerRef);
  }, [index, count]);

  console.log(data);

  return (
    <Container ref={containerRef}>
      <Column>
        <Info>
          <h1>
            {data[index].gender === 1 ? "Actress: " : "Actor: "}
            {data[index].name}
          </h1>
          {/* <Profile
            key={data[index].id}
            imageUrl={`https://image.tmdb.org/t/p/original/${data[index].profile_path}`}
            current={data[index].profile_path}
          /> */}
        </Info>

        <SliderContainer>
          {data[index].known_for.map((media) => (
            <Slider
              key={media.id}
              to={
                media.media_type === "movie"
                  ? `/movie/${media.id}`
                  : `/tv/${media.id}`
              }
            >
              <ImageTitle>
                <h1>{media.original_title}</h1>
              </ImageTitle>
              {media.poster_path ? (
                <ImageContainer>
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
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isMovie: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default PersonSlider;
