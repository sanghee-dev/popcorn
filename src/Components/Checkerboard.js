import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      45deg,
      var(--light-gray) 25%,
      transparent 25%
    ),
    linear-gradient(135deg, var(--light-gray) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--light-gray) 75%),
    linear-gradient(135deg, transparent 75%, var(--light-gray) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 10px 0, 10px -10px, 0px 10px;
`;

const Checkerboard = ({ halfRadius = false }) => {
  return (
    <Container style={{ borderRadius: `${!halfRadius ? "20px" : "10px"}` }} />
  );
};

Checkerboard.propTypes = {
  halfRadius: PropTypes.bool,
};

export default Checkerboard;

// import Checkerboard from "Components/Checkerboard";
// <Checkerboard  />
