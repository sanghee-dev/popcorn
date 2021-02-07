import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Poster = ({ title, imageUrl, year, rating, star }) => {
  return <div></div>;
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number,
  star: PropTypes.string,
};

export default Poster;
