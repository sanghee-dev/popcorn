import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { moviesApi, tvApi } from "api";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: 200px;
  padding: var(--space);
  margin-bottom: 20px;
  border: 1px solid var(--green);
  border-radius: 20px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 20px;
`;

const Video = ({ id, isMovie = true }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [results, setResults] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          if (isMovie) {
            const {
              data: { results },
            } = await moviesApi.video(id);
            setResults(results);
          } else {
            const {
              data: { results },
            } = await tvApi.video(id);
            setResults(results);
          }
        } catch {
          setError("Can't find video :(");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    return () => (mounted = false);
  }, []);

  return (
    <Container>
      {results &&
        results.length > 0 &&
        results.map((video) => (
          <Iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        ))}
    </Container>
  );
};

Video.propTypes = {};

export default Video;
