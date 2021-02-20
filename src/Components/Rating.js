import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  padding: var(--space);
  margin-bottom: var(--space);
  border-radius: var(--space);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Star = styled.div`
  font-size: 200px;
`;

const Rating = ({ grade }) => {
  const [rating, setRating] = useState();
  const containerRef = useRef(null);

  console.log(grade);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <Star>✱</Star>
    </Container>
  );
};

Rating.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default Rating;
