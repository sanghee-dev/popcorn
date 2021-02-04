import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState();
  const [movieResults, setMovieResults] = useState();
  const [tvResults, setTvResults] = useState();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Presenter
      loading={loading}
      error={error}
      searchTerm={searchTerm}
      movieResults={movieResults}
      tvResults={tvResults}
    />
  );
};

export default Container;
