import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const VideoContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
`;
const VideoTitle = styled.h1`
  width: calc(100vw - 80px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 20px;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
  border: 20px;
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

const Slider = ({ data, isMovie = true, isVideo = false, index, setIndex }) => {
  const containerRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const SLIDES = data.length;
  const media = data[index];

  return (
    <Container ref={containerRef}>
      <Column>
        {!isVideo ? (
          <SliderContainer ref={sliderContainerRef}>
            <ImageLink
              key={media.id}
              to={isMovie ? `/movie/${media.id}` : `/tv/${media.id}`}
            >
              <Image
                key={media.id}
                imageUrl={
                  media.poster_path
                    ? `https://image.tmdb.org/t/p/original/${media.poster_path}`
                    : require("../assets/noPosterSmall.png").default
                }
              />
            </ImageLink>
          </SliderContainer>
        ) : (
          <SliderContainer ref={sliderContainerRef}>
            <VideoContainer>
              <VideoTitle>{data && media.name}</VideoTitle>
              <Video
                src={`https://www.youtube.com/embed/${data && media.key}`}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </VideoContainer>
          </SliderContainer>
        )}
      </Column>

      <ButtonContainer>
        <Button onClick={() => setIndex(index === 0 ? SLIDES - 1 : index - 1)}>
          Previous
        </Button>
        <Button onClick={() => setIndex(index === SLIDES - 1 ? 0 : index + 1)}>
          Next
        </Button>
      </ButtonContainer>
    </Container>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  hasLink: PropTypes.bool,
  isMovie: PropTypes.bool,
  gradient: PropTypes.bool,
  index: PropTypes.number,
  setIndex: PropTypes.func,
};

export default Slider;
