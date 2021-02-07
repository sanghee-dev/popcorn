import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 4px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`;
const Rating = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.div``;
const Year = styled.div``;

const Poster = ({ id, title, imageUrl, year, rating, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            imageUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w200/${imageUrl}`
                : require("../assets/noPosterSmall.png")
            }
          />
          <Rating>
            <span role="img" aria-label="Rating">
              ⭐
            </span>
            {rating}
          </Rating>
        </ImageContainer>
        <Title>
          <h2>{title.length < 15 ? title : `${title.substring(0, 20)}...`}</h2>
        </Title>
        <Year>
          <h3>{year}</h3>
        </Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  year: PropTypes.string,
  rating: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default Poster;
