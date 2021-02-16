import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 100px;
`;

const Error = ({ text, color = "white" }) => {
  return (
    <Container>
      <h2 style={{ color: `${color}` }}>{text}</h2>
    </Container>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Error;
