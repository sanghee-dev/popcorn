import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--space);
  border-radius: 20px;
  margin-bottom: var(--space);
`;
const MainTitle = styled.h1`
  margin-bottom: var(--space);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SubTitle = styled.h1`
  margin-bottom: var(--space);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Text = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = ({
  title,
  text,
  height = "190px",
  color = "black",
  marginBottom = "var(--space)",
  subtitle,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container
      ref={containerRef}
      style={{ color: `${color}`, height: `${height}` }}
    >
      <MainTitle style={{ marginBottom: `${marginBottom}` }}>
        {title && title}
      </MainTitle>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {text && <Text>{text}</Text>}
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
