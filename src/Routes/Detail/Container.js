import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    return () => {};
  }, []);

  return <Presenter loading={loading} error={error} result={result} />;
};

export default Container;
