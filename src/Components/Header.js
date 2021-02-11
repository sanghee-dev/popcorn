import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { IoEllipsisHorizontal } from "react-icons/io5";

const Container = styled.div`
  width: 100vw;
  padding: var(--space);
  position: fixed;
  top: 0;
  z-index: 2;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space);
  & :first-child {
    display: flex;
    align-items: center;
  }
`;
const Toggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--space);
  background-color: white;
  cursor: pointer;
  :first-child {
    margin-right: var(--space);
  }
  :last-child {
    width: 130px;
  }
`;
const ListContainer = styled.div`
  width: 100%;
  height: calc(1rem + 40px);
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  display: ${(props) => (props.current ? "block" : "none")};
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  padding: 0 20px;
  color: ${(props) => (props.current ? "rgb(0, 255, 0)" : "rgb(0, 0, 0)")};
`;
const LINK = styled(Link)``;

const Header = ({ location: { pathname } }) => {
  const [toggleList, setToggleList] = useState(false);
  const [isMovie, setIsMovie] = useState(true);
  return (
    <Container>
      <ToggleContainer>
        <div>
          <Toggle onClick={() => setToggleList((prev) => !prev)}>
            <h2>
              <IoEllipsisHorizontal />
            </h2>
          </Toggle>
          <h1>Popcorn movies</h1>
        </div>
        <Toggle
          onClick={() => setIsMovie((prev) => !prev)}
          current={toggleList}
        >
          {isMovie === true ? (
            <LINK to="/movie">
              <h2>Movies</h2>
            </LINK>
          ) : (
            <LINK to="/tv">
              <h2>TV</h2>
            </LINK>
          )}
        </Toggle>
      </ToggleContainer>

      <ListContainer current={toggleList}>
        <List>
          <Item current={pathname === "/"}>
            <LINK to="/">
              <h2>Home</h2>
            </LINK>
          </Item>
          <Item current={pathname === "/search"}>
            <LINK to="/search">
              <h2>Search</h2>
            </LINK>
          </Item>
        </List>
      </ListContainer>
    </Container>
  );
};

export default withRouter(Header);
