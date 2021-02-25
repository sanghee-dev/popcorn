import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import ImageSlider from "Components/ImageSlider";
import PersonSlider from "Components/PersonSlider";

const Container = styled.div``;
const TitleContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid var(--gray);
  padding: var(--space) 0;
  border-radius: var(--space);
  margin-bottom: var(--quadruple-space);
`;
const Title = styled.div`
  font-size: 150px;
  display: flex;
  align-items: center;
`;
const TitleRotate = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  border-radius: 100px;
  animation: rotate_image 8s linear infinite;
  transform-origin: 50% 50%;
  margin-left: 12px;
  margin-right: 8px;
  @keyframes rotate_image {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const ImageSliderContainer = styled.div`
  @media screen and (min-width: 1000px) {
    & {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
    }
  }
`;

const Presenter = ({
  isLoading,
  error,
  movieTrends,
  tvTrends,
  personTrends,
}) => {
  const TitleContainerRef = useRef(null);

  useEffect(() => {
    Gradient(TitleContainerRef);
  }, []);

  return (
    <>
      <Helmet>
        <title>POPCORN</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <TitleContainer ref={TitleContainerRef}>
            <Title>
              P<TitleRotate>❋</TitleRotate>PC<TitleRotate>❋</TitleRotate>RN
            </Title>
          </TitleContainer>
          {personTrends && personTrends.length > 0 && (
            <PersonSlider data={personTrends} />
          )}
          <ImageSliderContainer>
            {movieTrends && movieTrends.length > 0 && (
              <ImageSlider
                title="Best Movies Right Now"
                data={movieTrends}
                isMovie={true}
                reverse={false}
              />
            )}
            {tvTrends && tvTrends.length > 0 && (
              <ImageSlider
                title="Best Shows Right Now"
                data={tvTrends}
                isMovie={false}
                reverse={true}
              />
            )}
          </ImageSliderContainer>
        </Container>
      )}

      {error && <Error text={error} />}
    </>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Presenter;
