import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moviesApi } from "api";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
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
        } catch (e) {
          setIsError("Can't find movies information.");
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
      isError={isError}
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
    />
  );
};

export default Container;
