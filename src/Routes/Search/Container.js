import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [movieResults, setMovieResults] = useState();
  const [tvResults, setTvResults] = useState();

  useEffect(() => {
    let mounted = true;
    if (searchTerm !== "" && searchTerm !== undefined && mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const {
            data: { results: movieResults },
          } = await moviesApi.search(searchTerm);
          const {
            data: { results: tvResults },
          } = await tvApi.search(searchTerm);
          setMovieResults(movieResults);
          setTvResults(tvResults);
        } catch (e) {
          setError("Can't search results :(");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    return () => (mounted = false);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      setIsLoading(true);
    }
    setSearchTerm("");
  };
  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  return (
    <Presenter
      isLoading={isLoading}
      error={error}
      searchTerm={searchTerm}
      movieResults={movieResults}
      tvResults={tvResults}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default Container;
