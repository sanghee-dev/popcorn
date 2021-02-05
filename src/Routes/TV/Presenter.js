import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Presenter = ({ isLoading, error, airingToday, onTheAir, popular }) => {
  Presenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    popula: PropTypes.array,
  };

  return <div>TV</div>;
};

export default Presenter;
