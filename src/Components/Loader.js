import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  & h1 {
    margin-top: 28px;
    font-size: 28px;
  }
`;

const Loader = () => {
  return (
    <Container>
      <h1 role="img" aria-label="Loading">
        🍿
      </h1>
    </Container>
  );
};

export default Loader;
