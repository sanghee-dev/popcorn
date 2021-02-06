import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Presenter = ({
  isLoading,
  error,
  searchTerm,
  movieResults,
  tvResults,
  handleSubmit,
}) => {
  Presenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired,
  };
  return <div>Search</div>;
};

export default Presenter;
