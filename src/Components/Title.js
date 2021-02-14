import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 600px;
  height: 200px;
  padding: var(--space);
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Title = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <h1>POPCORN</h1>
    </Container>
  );
};

Title.propTypes = {};

export default Title;
