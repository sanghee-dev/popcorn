import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Error from "Components/Error";
import ImageSlider from "Components/ImageSlider";

const Container = styled.div`
  @media screen and (min-width: 1000px) {
    & {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
    }
  }
`;

const Presenter = ({
  isLoading,
  error,
  airingToday,
  onTheAir,
  popular,
  topRated,
}) => {
  return (
    <>
      <Helmet>
        <title>TV | Popcorn</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Container>
            {airingToday && airingToday.length > 0 && (
              <ImageSlider
                title="Airing Today Shows"
                data={airingToday}
                isMovie={false}
                reverse={false}
              />
            )}
            {onTheAir && onTheAir.length > 0 && (
              <ImageSlider
                title="On The Air Shows"
                data={onTheAir}
                isMovie={false}
                reverse={true}
              />
            )}
            {popular && popular.length > 0 && (
              <ImageSlider
                title="Popular Shows"
                data={popular}
                isMovie={false}
                reverse={false}
              />
            )}
            {topRated && topRated.length > 0 && (
              <ImageSlider
                title="Top Rated Shows"
                data={topRated}
                isMovie={false}
                reverse={true}
              />
            )}
            {error && <Error text={error} />}
          </Container>
        </div>
      )}
    </>
  );
};

Presenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  airingToday: PropTypes.array,
  onTheAir: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
};

export default Presenter;
