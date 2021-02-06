import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Presenter = ({ isLoading, error, result }) => {
  Presenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    result: PropTypes.object,
  };
  return <div>Detail</div>;
};

export default Presenter;
