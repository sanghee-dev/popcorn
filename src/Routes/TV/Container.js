import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [airingToday, setAiringToday] = useState();
  const [onTheAir, setOnTheAir] = useState();
  const [popular, setPopular] = useState();

  useEffect(() => {
    return () => {};
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
