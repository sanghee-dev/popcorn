import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { tvApi } from "api";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [airingToday, setAiringToday] = useState();
  const [onTheAir, setOnTheAir] = useState();
  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const {
            data: { results: airingToday },
          } = await tvApi.airingToday();
          const {
            data: { results: onTheAir },
          } = await tvApi.onTheAir();
          const {
            data: { results: popular },
          } = await tvApi.popular();
          const {
            data: { results: topRated },
          } = await tvApi.topRated();
          setAiringToday(airingToday);
          setOnTheAir(onTheAir);
          setPopular(popular);
          setTopRated(topRated);
        } catch {
          setError("Can't find TV shows information :(");
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
      airingToday={airingToday}
      onTheAir={onTheAir}
      popular={popular}
      topRated={topRated}
    />
  );
};

export default Container;
