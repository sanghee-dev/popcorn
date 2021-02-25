import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import { IoSearch } from "react-icons/io5";
import ImageSlider from "Components/ImageSlider";

const Container = styled.div`
  padding-top: 80px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-radius: 40px;
  font-size: var(--h2);
  position: relative;
  top: -80px;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-left: var(--space);
  border: none;
  font-size: var(--h2);
  outline: none;
  ::placeholder {
    font-size: var(--h2);
  }
`;
const ImageSliderContainer = styled.div`
  @media screen and (min-width: 1000px) {
    & {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
    }
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
        <ImageSliderContainer>
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
        </ImageSliderContainer>
      )}
      {error && <Error text={error} />}
      {movieResults &&
        tvResults &&
        movieResults.length === 0 &&
        tvResults.length === 0 && (
          <Error text={`Nothing found for ${searchTerm}`} />
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
