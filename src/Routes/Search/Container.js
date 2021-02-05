import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
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
        } catch {
          setIsError("Can't find results.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    return () => (mounted = false);
  }, [searchTerm]);

  const handleSubmit = () => {
    if (searchTerm) {
      setIsLoading(true);
    }
  };

  return (
    <Presenter
      isLoading={isLoading}
      isError={isError}
      searchTerm={searchTerm}
      movieResults={movieResults}
      tvResults={tvResults}
      handleSubmit={handleSubmit}
    />
  );
};

export default Container;
