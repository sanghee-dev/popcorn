import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  const searchByTerm = async () => {
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
      console.log(movieResults, tvResults);
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (searchTerm) {
      setLoading(true);
      searchByTerm();
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
