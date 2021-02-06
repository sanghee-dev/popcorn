import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const Presenter = ({
  isLoading,
  error,
  airingToday,
  onTheAir,
  popular,
  topRated,
}) => {
  Presenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    popula: PropTypes.array,
    topRated: PropTypes.array,
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Container>
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today Shows">
            {airingToday.map((movie) => (
              <h3 key={movie.id}>{movie.name}</h3>
            ))}
          </Section>
        )}
        {onTheAir && onTheAir.length > 0 && (
          <Section title="On The Air Shows">
            {onTheAir.map((movie) => (
              <h3 key={movie.id}>{movie.name}</h3>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((movie) => (
              <h3 key={movie.id}>{movie.name}</h3>
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((movie) => (
              <h3 key={movie.id}>{movie.title}</h3>
            ))}
          </Section>
        )}
      </Container>
    </div>
  );
};

export default Presenter;
