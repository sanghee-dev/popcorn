import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  height: 200px;
  padding: var(--space);
  margin-bottom: 20px;
  border: 1px solid var(--green);
  border-radius: 20px;
`;

const Video = () => {
  return (
    <Container>
      <h1>Video</h1>
    </Container>
  );
};

Video.propTypes = {};

export default Video;
