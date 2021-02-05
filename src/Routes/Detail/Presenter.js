import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Presenter = ({ loading, error, result }) => {
  Presenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    result: PropTypes.object,
  };
  return <div>Detail</div>;
};

export default Presenter;
