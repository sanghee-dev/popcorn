import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { tvApi } from "api";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      try {
        const fetchTV = async () => {
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
        };
        fetchTV();
      } catch (e) {
        setError("Can't find TV information.");
      } finally {
      }
    }
    return () => (mounted = false);
  }, []);

  return (
    <Presenter
      loading={loading}
      error={error}
      airingToday={airingToday}
      onTheAir={onTheAir}
      popular={popular}
    />
  );
};

export default Container;
