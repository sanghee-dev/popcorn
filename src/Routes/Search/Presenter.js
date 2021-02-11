import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";
import { IoSearch } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-radius: 40px;
  font-size: 18px;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 8px;
  border: none;
  color: white;
  font-size: 18px;
  ::placeholder {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Presenter = ({
  isLoading,
  error,
  searchTerm,
  movieResults,
  tvResults,
  handleSubmit,
  updateTerm,
}) => {
  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>Search | Popcorn</title>
        </Helmet>
      </HelmetProvider>
      <Form onSubmit={handleSubmit}>
        <IoSearch />
        <Input
          onChange={updateTerm}
          placeholder="Search Movies or TV shows..."
          value={searchTerm}
        />
      </Form>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  imageUrl={movie.poster_path}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  rating={movie.vote_average}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Shows Results">
              {tvResults.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  imageUrl={tv.poster_path}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                  rating={tv.vote_average}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Error text={error} />}
      {movieResults &&
        tvResults &&
        movieResults.length === 0 &&
        tvResults.length === 0 && (
          <Error text={`Nothing found for ${searchTerm}`} color="yellow" />
        )}
    </Container>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default Presenter;
