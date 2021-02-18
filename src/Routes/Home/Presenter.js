import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Title from "Components/Title";
import Video from "Components/Video";

const Container = styled.div``;

const Presenter = ({ isLoading, error }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | Popcorn</title>
        </Helmet>
      </HelmetProvider>

      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Title text="Home" />
            <Video />
          </div>
        )}
        {error && <Error text={error} />}
      </Container>
    </>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Presenter;
