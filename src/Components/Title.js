import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  height: 190px;
  padding: var(--space);
  border-radius: 20px;
  margin-bottom: var(--space);
  & h1 {
    margin-bottom: var(--space);
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & h2 {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Title = ({ title, text, color = "black" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef} style={{ color: `${color}` }}>
      <h1>{title}</h1>
      <h2>{text}</h2>
    </Container>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Title;

// import Title from "Components/Title";
// <Title title="title" text="text" />
