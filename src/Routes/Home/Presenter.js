import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";

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
            <Poster
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((movie) => (
            <Poster
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <Poster
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Movies">
          {topRated.map((movie) => (
            <Poster
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
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
