import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Presenter = ({ isLoading, error, result }) => {
  return <Container>Detail</Container>;
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  result: PropTypes.object,
};

export default Presenter;
