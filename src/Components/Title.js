import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = () => {
  return (
    <Container>
      <h1>Title</h1>
    </Container>
  );
};

Title.propTypes = {
  isLoading: PropTypes.array,
};

export default Title;
