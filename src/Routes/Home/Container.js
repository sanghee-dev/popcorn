import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi } from "api";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [upcoming, setUpcoming] = useState();
  const [popular, setPopular] = useState();

  useEffect(() => {
    try {
      const fetchHome = async () => {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      };
      fetchHome();
    } catch (e) {
      setError("Can't find movies information.");
    } finally {
    }
    return () => {};
  }, []);

  return (
    <Presenter
      loading={loading}
      error={error}
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
    />
  );
};

export default Container;
