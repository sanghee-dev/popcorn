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
  const [credits, setCredits] = useState();
  const [collection, setCollection] = useState();
  const [collectionId, setCollectionId] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          // detail
          if (isMovie) {
            const { data: result } = await moviesApi.detail(id);
            setResult(result);
            setCollectionId(result.belongs_to_collection.id);
          } else {
            const { data: result } = await tvApi.detail(id);
            setResult(result);
          }
          // credits
          if (isMovie) {
            const {
              data: { cast },
            } = await moviesApi.credits(id);
            cast.length > 20 ? setCredits(cast.slice(0, 20)) : setCredits(cast);
          } else {
            const {
              data: { cast },
            } = await tvApi.credits(id);
            cast.length > 20 ? setCredits(cast.slice(0, 20)) : setCredits(cast);
          }
          // collection
          if (isMovie) {
            const { data: collection } = await moviesApi.collection(
              collectionId
            );
            setCollection(collection);
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
  }, [id, isMovie, collectionId]);
  return (
    <Presenter
      isLoading={isLoading}
      error={error}
      isMovie={isMovie}
      result={result}
      credits={credits}
      collection={collection}
    />
  );
};

export default withRouter(Container);
