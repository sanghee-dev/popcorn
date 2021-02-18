import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gradient from "Components/Gradient";
import Slider from "Components/Slider";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: var(--space);
  & :not(:last-child) {
    margin-bottom: var(--space);
  }
`;
const ActorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
`;
const Actor = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: calc(25vw - 35px);
  height: calc(25vw - 35px);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  -webkit-filter: grayscale(100%);
  margin-bottom: var(--space);
`;
const More = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  & :not(:last-child) {
    margin-right: 10px;
    font-size: 10px;
    position: relative;
    top: 3.5px;
  }
`;

const Credit = ({ credits }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);

  // containerRef.current.style.height = more ? "100%" : "350px";
  // containerRef.current.style.overflow = more ? "auto" : "hidden";

  console.log(credits);

  useEffect(() => {
    Gradient(containerRef);
  }, []);

  return (
    <Container ref={containerRef}>
      <h1>Credits</h1>
      <ActorContainer>
        {more ? (
          <>
            {credits &&
              credits.map((credit) => (
                <Actor>
                  <Image
                    key={credit.cast_id}
                    imageUrl={
                      credit.profile_path
                        ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
                        : require("../assets/noPosterSmall.png").default
                    }
                  />
                  <h3>{credit.original_name}</h3>
                  <h3>{credit.character}</h3>
                </Actor>
              ))}
          </>
        ) : (
          <>
            {credits &&
              credits.slice(0, 4).map((credit) => (
                <Actor>
                  <Image
                    key={credit.cast_id}
                    imageUrl={
                      credit.profile_path
                        ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
                        : require("../assets/noPosterSmall.png").default
                    }
                  />
                  <h3>{credit.original_name}</h3>
                  <h3>{credit.character}</h3>
                </Actor>
              ))}
          </>
        )}
      </ActorContainer>
      <More onClick={() => setMore((prev) => !prev)}>
        {more ? <IoEllipseOutline /> : <IoEllipse />}
        <h4>More info</h4>
      </More>
    </Container>
  );
};

Credit.propTypes = {
  result: PropTypes.array,
};

export default Credit;
