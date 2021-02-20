import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 130px;
  padding: var(--space);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;
const Logo = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 90px;
  background-position: center center;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
const Button = styled.div`
  width: 40px;
  height: 130px;
  cursor: pointer;
  position: absolute;
  :first-child {
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 255, 0, 0)
    );
  }
  :last-child {
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 255, 0, 0)
    );
  }
`;

const Company = ({ result }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const count = result.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === count - 1 ? 0 : index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container ref={containerRef}>
      <Logo
        key={result[index].id}
        imageUrl={
          result[index].logo_path
            ? `https://image.tmdb.org/t/p/original${result[index].logo_path}`
            : setIndex(index === count - 1 ? 0 : index + 1)
        }
      />

      <ButtonContainer>
        <Button onClick={() => setIndex(index === 0 ? count - 1 : index - 1)}>
          <h1></h1>
        </Button>
        <Button onClick={() => setIndex(index === count - 1 ? 0 : index + 1)}>
          <h1></h1>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

Company.propTypes = {
  result: PropTypes.array,
};

export default Company;

// import Company from "Components/Company";
// <Company result={result} />
