import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";

const Container = styled.div`
  width: 100%;
  height: 130px;
  padding: var(--space);
  border-radius: 20px;
  overflow: hidden;
`;
const Logo = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;

const Company = ({ result }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  console.log(result);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      {result &&
        result.map((logo) => (
          <Logo
            key={logo.id}
            imageUrl={
              logo.logo_path
                ? `https://image.tmdb.org/t/p/original${logo.logo_path}`
                : require("../assets/noPosterSmall.png").default
            }
          />
        ))}
    </Container>
  );
};

Company.propTypes = {
  title: PropTypes.string,
};

export default Company;

// import Company from "Components/Company";
// <Company result={result} />
