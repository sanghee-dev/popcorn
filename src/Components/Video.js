import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { moviesApi, tvApi } from "api";
import Slider from "Components/Slider";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: calc(100vw - 40px);
  height: 600px;
  padding: var(--space);
  margin-bottom: var(--space);
  border-radius: 20px;
`;

const Video = ({ id, isMovie = true }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [results, setResults] = useState();
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      Gradient(containerRef);
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
  }, [id, isMovie]);

  return (
    <Container ref={containerRef}>
      {results && results.length > 0 && (
        <Slider
          data={results}
          isVideo={true}
          index={index}
          setIndex={setIndex}
        />
      )}
    </Container>
  );
};

Video.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool,
};

export default Video;
