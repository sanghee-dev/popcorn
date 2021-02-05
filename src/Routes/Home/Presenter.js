import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Presenter = ({ loading, error, nowPlaying, upcoming, popular }) => {
  Presenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
  };
  return <div>Home</div>;
};

export default Presenter;
