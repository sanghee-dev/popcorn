import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
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
  background-color: black;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 17px -6px;
  font-size: 18px;
  color: rgb(200, 200, 200);
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 8px;
  border: none;
  background-color: black;
  color: white;
  font-size: 18px;
  ::placeholder {
    color: rgb(200, 200, 200);
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
                <h3 key={movie.id}>{movie.title}</h3>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Shows Results">
              {movieResults.map((movie) => (
                <h3 key={movie.id}>{movie.title}</h3>
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
