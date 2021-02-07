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
  airingToday,
  onTheAir,
  popular,
  topRated,
}) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Container>
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today Shows">
            {airingToday.map((tv) => (
              <Poster
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                rating={tv.vote_average}
              />
            ))}
          </Section>
        )}
        {onTheAir && onTheAir.length > 0 && (
          <Section title="On The Air Shows">
            {onTheAir.map((tv) => (
              <Poster
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                rating={tv.vote_average}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((tv) => (
              <Poster
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                rating={tv.vote_average}
              />
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((tv) => (
              <Poster
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                rating={tv.vote_average}
              />
            ))}
          </Section>
        )}
        {error && <Error text={error} />}
      </Container>
    </div>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  airingToday: PropTypes.array,
  onTheAir: PropTypes.array,
  popula: PropTypes.array,
  topRated: PropTypes.array,
};

export default Presenter;
