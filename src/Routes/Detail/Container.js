import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Presenter from "./Presenter";
import { moviesApi, tvApi } from "api";

const Container = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isMovie, setIsMovie] = useState();
  const [isTV, setIsTV] = useState();
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
    setIsMovie(pathname.includes("/movie/"));
    setIsTV(pathname.includes("/tv/"));
    if (mounted) {
      const fetchDetail = async () => {
        try {
          if (isMovie) {
            const { data: result } = await moviesApi.detail(parsedId);
            setResult(result);
          } else if (isTV) {
            const { data: result } = await tvApi.detail(parsedId);
            setResult(result);
          }
        } catch {
          setError("Can't find anything.");
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    }
    return () => (mounted = false);
  }, []);

  return <Presenter loading={loading} error={error} result={result} />;
};

export default withRouter(Container);
