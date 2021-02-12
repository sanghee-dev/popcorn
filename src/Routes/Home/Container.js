import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  return <Presenter isLoading={isLoading} error={error} />;
};

export default Container;
