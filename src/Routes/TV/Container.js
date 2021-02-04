import React, { useState } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [airingToday, setAiringToday] = useState();
  const [onTheAir, setOnTheAir] = useState();
  const [popular, setPopular] = useState();

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
