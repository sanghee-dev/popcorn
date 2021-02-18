import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Video from "Components/Video";
import Title from "Components/Title";
import Company from "Components/Company";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 50px);
`;
const InfoContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
`;
const Info = styled.div`
  width: 130px;
  margin-left: var(--space);
`;
const IMDb = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 20px;
  padding: 0 var(--space);
  margin-bottom: var(--space);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  cursor: pointer;
  text-align: center;
`;

const Backdrop = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 1200px;
  left: 0;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 50%;
`;
const Cover = styled.div`
  width: 50%;
  height: 50%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;

const Presenter = ({ isLoading, error, isMovie, result }) => (
  <>
    <HelmetProvider>
      <Helmet>
        <title>Detail | Popcorn</title>
      </Helmet>
    </HelmetProvider>

    {console.log(result)}

    {isLoading ? (
      <Loader />
    ) : result ? (
      <Container>
        <InfoContainer>
          <Title
            title={
              result.original_title
                ? result.original_title
                : result.original_name
            }
            text={result.overview && result.overview}
          />
          <Info>
            <IMDb
              onClick={() =>
                isMovie
                  ? (window.location = `http://www.imdb.com/title/${result.imdb_id}`)
                  : (window.location = result.homepage)
              }
            >
              <h2>IMDb</h2>
            </IMDb>
            <Company result={result.production_companies} />
          </Info>
        </InfoContainer>
        <Video id={result.id} isMovie={isMovie} />
        <Title
          title={
            result.genres &&
            result.genres.map((genre, index) =>
              index === result.genres.length - 1 ? genre.name : `${genre.name}&`
            )
          }
          text={`${
            result.release_date
              ? result.release_date.substring(0, 4)
              : result.first_air_date
              ? result.first_air_date.substring(0, 4)
              : null
          } ${result.runtime && `${result.runtime} min`} ${
            result.vote_average && `${result.vote_average} / 10`
          }`}
        />
        {error && <Error text={error} />}

        <Backdrop
          imageUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
        <Cover
          imageUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
      </Container>
    ) : (
      <></>
    )}
  </>
);

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  result: PropTypes.shape({
    backdrop_path: PropTypes.string,
  }),
};

export default Presenter;
