import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { tvApi } from "api";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);

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
          setAiringToday(airingToday);
          setOnTheAir(onTheAir);
          setPopular(popular);
        } catch {
          setIsError("Can't find TV information.");
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
      airingToday={airingToday}
      onTheAir={onTheAir}
      popular={popular}
    />
  );
};

export default Container;
