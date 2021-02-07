import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 100px;
`;
const Text = styled.h2`
  color: ${(props) => props.color};
`;

const Error = ({ text, color = "white" }) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Error;
