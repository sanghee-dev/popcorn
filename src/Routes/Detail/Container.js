import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = (props) => {
  const {
    history: { push },
    location: { pathname },
    match: {
      params: { id },
    },
  } = props;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    push("/");
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));
  const [result, setResult] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          if (isMovie) {
            const { data: result } = await moviesApi.detail(id);
            setResult(result);
          } else {
            const { data: result } = await tvApi.detail(id);
            setResult(result);
          }
          console.log(result);
        } catch {
          setError("Can't find anything :(");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    return () => (mounted = false);
  }, [id, isMovie]);
  return (
    <Presenter
      isLoading={isLoading}
      error={error}
      isMovie={isMovie}
      result={result}
    />
  );
};

export default withRouter(Container);
