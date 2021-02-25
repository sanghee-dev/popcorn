import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const TitleRotate = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  position: fixed;
  top: 50%;
  margin-top: -45px; /* Negative half of height. */
  animation: rotate_image 8s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <TitleRotate role="img" aria-label="Loading">
        ❋
      </TitleRotate>
    </Container>
  );
};

export default Loader;
