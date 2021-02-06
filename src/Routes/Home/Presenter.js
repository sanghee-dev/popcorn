import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div``;

const Presenter = ({
  isLoading,
  error,
  nowPlaying,
  upcoming,
  popular,
  topRated,
}) => {
  Presenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array,
  };
  return isLoading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="NowPlaying">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((movie) => movie.title)}</Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="topRated">
          {topRated.map((movie) => movie.title)}
        </Section>
      )}
    </Container>
  );
};

export default Presenter;
