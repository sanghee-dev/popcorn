import React, { useState } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [movieResults, setMovieResults] = useState();
  const [tvResults, setTvResults] = useState();

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
