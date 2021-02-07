import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Error from "Components/Error";

const Container = styled.div``;

const Presenter = ({ isLoading, error, result }) => {
  return (
    <>
      <Container>
        Detail
        {error && <Error text={error} />}
      </Container>
    </>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  result: PropTypes.object,
};

export default Presenter;
