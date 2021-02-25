import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import ImageSlider from "Components/ImageSlider";

const Container = styled.div`
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
  nowPlaying,
  upcoming,
  popular,
  topRated,
}) => {
  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <ImageSlider
              title="Now Playing Movies"
              data={nowPlaying}
              isMovie={true}
              reverse={false}
            />
          )}
          {upcoming && upcoming.length > 0 && (
            <ImageSlider
              title="Upcoming Movies"
              data={upcoming}
              isMovie={true}
              reverse={true}
            />
          )}
          {popular && popular.length > 0 && (
            <ImageSlider
              title="Popular Movies"
              data={popular}
              isMovie={true}
              reverse={false}
            />
          )}
          {topRated && topRated.length > 0 && (
            <ImageSlider
              title="Top Rated Movies"
              data={topRated}
              isMovie={true}
              reverse={true}
            />
          )}
          {error && <Error text={error} />}
        </Container>
      )}
    </>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
};

export default Presenter;
