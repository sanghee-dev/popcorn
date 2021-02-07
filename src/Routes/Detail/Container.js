import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMovie, setIsMovie] = useState();
  const [isTV, setIsTV] = useState();
  const [result, setResult] = useState({});

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
      setIsMovie(pathname.includes("/movie/"));
      setIsTV(pathname.includes("/tv/"));
      const fetchData = async () => {
        try {
          if (isMovie) {
            const { data: result } = await moviesApi.detail(parsedId);
            setResult(result);
          } else if (isTV) {
            const { data: result } = await tvApi.detail(parsedId);
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
