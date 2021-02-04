import React, { useState } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [upcoming, setUpcoming] = useState();
  const [popular, setPopular] = useState();

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
