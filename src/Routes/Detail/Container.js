import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [result, setResult] = useState();

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

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          if (pathname.includes("/movie/")) {
            const { data: result } = await moviesApi.detail(id);
            setResult(result);
          } else {
            const { data: result } = await tvApi.detail(id);
            setResult(result);
          }
        } catch {
          setError("Can't find anything :(");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    return () => (mounted = false);
  }, []);
  return <Presenter isLoading={isLoading} error={error} result={result} />;
};

export default withRouter(Container);
