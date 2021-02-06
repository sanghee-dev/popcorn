import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

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

  return isLoading ? null : (
    <div>
      <Container>
        {airingToday && airingToday.length > 0 && (
          <Section title="airingToday">
            {airingToday.map((movie) => movie.name)}
          </Section>
        )}
        {onTheAir && onTheAir.length > 0 && (
          <Section title="onTheAir">
            {onTheAir.map((movie) => movie.name)}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="popular">
            {popular.map((movie) => movie.name)}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="topRated">
            {topRated.map((movie) => movie.title)}
          </Section>
        )}
      </Container>
    </div>
  );
};

export default Presenter;
