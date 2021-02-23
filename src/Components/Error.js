import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  height: 190px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: fixed;
  top: 80px;
`;

const Error = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Gradient(containerRef, "var(--red)");
  }, []);

  return (
    <Container ref={containerRef}>
      <h1>{text}</h1>
    </Container>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
