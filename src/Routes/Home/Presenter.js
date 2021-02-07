import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div``;

const Presenter = ({
  isLoading,
  error,
  nowPlaying,
  upcoming,
  popular,
  topRated,
}) => {
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing Movies">
          {nowPlaying.map((movie) => (
            <h3 key={movie.id}>{movie.title}</h3>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((movie) => (
            <h3 key={movie.id}>{movie.title}</h3>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <h3 key={movie.id}>{movie.title}</h3>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Movies">
          {topRated.map((movie) => (
            <h3 key={movie.id}>{movie.title}</h3>
          ))}
        </Section>
      )}
      {error && <Error text={error} />}
    </Container>
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
