import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import { IoSearch } from "react-icons/io5";
import ImageSlider from "Components/ImageSlider";

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
      <Helmet>
        <title>Search</title>
      </Helmet>

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
            <ImageSlider
              title="Movie Results"
              data={movieResults}
              isMovie={true}
              reverse={false}
            />
          )}

          {tvResults && tvResults.length > 0 && (
            <ImageSlider
              title="TV Shows Results"
              data={tvResults}
              isMovie={false}
              reverse={true}
            />
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
