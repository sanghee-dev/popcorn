import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 50%;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;
const Data = styled.div`
  width: 70%;
  height: 100%;
`;
const Divider = styled.div``;
const IMDb = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 6px;
  background-color: yellow;
  color: black;
  font-weight: 600;
  text-align: center;
  padding: 4px;
  cursor: pointer;
`;

const Presenter = ({ isLoading, error, isMovie, result }) => (
  <>
    <HelmetProvider>
      <Helmet>
        <title>Detail | Popcorn</title>
      </Helmet>
    </HelmetProvider>
    {isLoading ? (
      <Loader />
    ) : result ? (
      <Container>
        <Backdrop
          imageUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
        <Content>
          <Cover
            imageUrl={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                : require("../../assets/noPosterSmall.png").default
            }
          />
          <Data>
            <h1>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </h1>
            <h1>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}&`
                )}
            </h1>
            <h1>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date
                ? result.first_air_date.substring(0, 4)
                : null}
            </h1>
            <Divider>|</Divider>
            <h1>{result.runtime && `${result.runtime} min`}</h1>
            <h1>{result.vote_average && `${result.vote_average} / 10`}</h1>
            <IMDb
              onClick={() =>
                isMovie
                  ? (window.location = `http://www.imdb.com/title/${result.imdb_id}`)
                  : (window.location = result.homepage)
              }
            >
              IMDb
            </IMDb>
            <h1>{result.overview && `overview : ${result.overview}`}</h1>
          </Data>
        </Content>
        {error && <Error text={error} />}
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
