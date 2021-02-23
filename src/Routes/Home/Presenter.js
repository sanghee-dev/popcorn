import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Title from "Components/Title";
import ImageSlider from "Components/ImageSlider";
import PersonSlider from "Components/PersonSlider";

const Container = styled.div``;

const Presenter = ({
  isLoading,
  error,
  movieTrends,
  tvTrends,
  personTrends,
}) => {
  return (
    <>
      <Helmet>
        <title>POPCORN</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Title title="Home" />
          {personTrends && personTrends.length > 0 && (
            <PersonSlider data={personTrends} />
          )}
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
