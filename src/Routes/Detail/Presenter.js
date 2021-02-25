import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Video from "Components/Video";
import Title from "Components/Title";
import Company from "Components/Company";
import Credit from "Components/Credit";
import Collection from "Components/Collection";
import Season from "Components/Season";
import Review from "Components/Review";
import { IoArrowBack } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const PrevButton = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  top: var(--space);
  left: var(--space);
  border-radius: 20px;
  background-color: white;
  z-index: 999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
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
  review,
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
          {isMovie ? (
            <Link to="/movie">
              <PrevButton>
                <IoArrowBack />
              </PrevButton>
            </Link>
          ) : (
            <Link to="/tv">
              <PrevButton>
                <IoArrowBack />
              </PrevButton>
            </Link>
          )}

          <TitleContainer>
            <Title
              title={
                result && result.original_title
                  ? result && result.original_title
                  : result.original_name
              }
              text={result && result.overview}
              height="calc(33.3vw - 20px)"
            />
            {isMovie
              ? result.production_companies && (
                  <Company result={result.production_companies} />
                )
              : result.networks && <Company result={result.networks} />}
          </TitleContainer>

          <Video id={result.id} isMovie={isMovie} />
          {credits && <Credit results={credits} currentId={result.id} />}
          {isMovie && collection && (
            <Collection results={collection} currentId={result.id} />
          )}
          {!isMovie && result.seasons && (
            <Season
              results={result.seasons}
              currentId={result.number_of_seasons}
            />
          )}
          {review && <Review results={review} currentId={result.id} />}
          <IMDbButton
            onClick={() =>
              isMovie
                ? (window.location = `http://www.imdb.com/title/${result.imdb_id}`)
                : (window.location = result.homepage)
            }
          >
            <h2>{isMovie ? "IMDb" : "homepage"}</h2>
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
  isMovie: PropTypes.bool.isRequired,
  result: PropTypes.shape({
    backdrop_path: PropTypes.string,
  }),
  credits: PropTypes.array,
  collection: PropTypes.array,
  review: PropTypes.array,
};

export default Presenter;
