import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [movieTrends, setMovieTrends] = useState();
  const [tvTrends, setTvTrends] = useState();
  const [personTrends, setPersonTrends] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const {
            data: { results: movieTrend },
          } = await moviesApi.trending();
          setMovieTrends(movieTrend);
          const {
            data: { results: tvTrend },
          } = await tvApi.trending();
          setTvTrends(tvTrend);
          const {
            data: { results: personTrend },
          } = await moviesApi.trending("person");
          setPersonTrends(personTrend);
        } catch {
          setError("Can't find trend information :(");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    return () => (mounted = false);
  }, []);

  return (
    <Presenter
      isLoading={isLoading}
      error={error}
      movieTrends={movieTrends}
      tvTrends={tvTrends}
      personTrends={personTrends}
    />
  );
};

export default Container;
