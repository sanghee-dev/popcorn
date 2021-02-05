import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Presenter = ({ loading, error, airingToday, onTheAir, popular }) => {
  Presenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    popula: PropTypes.array,
  };

  return <div>TV</div>;
};

export default Presenter;
