import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Video from "Components/Video";
import Title from "Components/Title";
import Company from "Components/Company";
import Credit from "Components/Credit";
import Collection from "Components/Collection";
import Season from "Components/Season";
import Rating from "Components/Rating";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const TitleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: var(--space);
`;

const Overview = styled.div`
  height: 250px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: var(--space);
`;
const IMDbButton = styled.div`
  width: 100%;
  padding: var(--space);
  border-radius: 40px;
  background-color: white;
  color: black;
  cursor: pointer;
  text-align: center;
  font-size: 23px;
  transition: all 0.5s;
  :hover {
    background-color: black;
    color: white;
  }
`;

const Presenter = ({
  isLoading,
  error,
  isMovie,
  result,
  credits,
  collection,
}) => {
  return (
    <>
      <Helmet>
        <title>{result && result.original_title}</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : result ? (
        <Container>
          <TitleContainer>
            <Title
              title={
                result && result.original_title
                  ? result && result.original_title
                  : result.original_name
              }
              text={result && result.tagline}
            />
            <Company result={result.production_companies} />
          </TitleContainer>

          <Video id={result.id} isMovie={isMovie} />

          <Overview>
            <Title
              title="Overview"
              text={result && result.overview}
              marginBottom="var(--quadruple-space)"
              height="240px"
            />
            <Rating grade={result.vote_average} />
          </Overview>

          {credits && <Credit results={credits} />}

          {isMovie && collection && (
            <Collection results={collection} currentId={result.id} />
          )}
          {!isMovie && result.seasons && <Season results={result.seasons} />}

          <IMDbButton
            onClick={() =>
              isMovie
                ? (window.location = `http://www.imdb.com/title/${result.imdb_id}`)
                : (window.location = result.homepage)
            }
          >
            <h2>IMDb</h2>
          </IMDbButton>

          {/* {error && <Error text={error} />} */}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  result: PropTypes.shape({
    backdrop_path: PropTypes.string,
  }),
};

export default Presenter;
