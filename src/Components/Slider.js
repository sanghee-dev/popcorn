import React from "react";
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
  margin-bottom: var(--space);
`;
const SliderContainer = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: var(--space);
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
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const VideoTitle = styled.h1`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: var(--space);
`;
const Video = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 20px;
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

const Slider = ({
  data,
  isMovie = true,
  isVideo = false,
  isCredit = false,
  hasCount = false,
  index,
  setIndex,
}) => {
  const count = data.length;
  const media = data[index];

  return (
    <Container>
      <Column>
        {!isVideo ? (
          <SliderContainer>
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
          <SliderContainer>
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
        <Button onClick={() => setIndex(index === 0 ? count - 1 : index - 1)}>
          <h1>Previous</h1>
        </Button>
        {hasCount ? (
          <Button>
            <h1>{count > 2 ? `${index + 1} / ${count}` : ""}</h1>
          </Button>
        ) : (
          <></>
        )}
        <Button onClick={() => setIndex(index === count - 1 ? 0 : index + 1)}>
          <h1>Next</h1>
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
