import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      try {
        const fetchSearch = async () => {
          const {
            data: { results: movieResults },
          } = await moviesApi.search(searchTerm);
          const {
            data: { results: tvResults },
          } = await tvApi.search(searchTerm);
          setMovieResults(movieResults);
          setTvResults(tvResults);
        };
        fetchSearch();
        console.log(movieResults, tvResults);
      } catch {
        setError("Can't find results.");
      } finally {
        setLoading(false);
      }
    }
  }, [searchTerm]);

  const handleSubmit = () => {
    if (searchTerm) {
      setLoading(true);
    }
  };

  return (
    <Presenter
      loading={loading}
      error={error}
      searchTerm={searchTerm}
      movieResults={movieResults}
      tvResults={tvResults}
      handleSubmit={handleSubmit}
    />
  );
};

export default Container;
