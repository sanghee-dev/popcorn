import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { IoEllipsisHorizontal } from "react-icons/io5";

const Container = styled.div`
  width: calc(100vw-40px);
  position: fixed;
  top: var(--default-space);
  z-index: 2;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--default-space);
`;
const Toggle = styled.div`
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--default-space);
  :first-child {
    width: 40px;
    background-color: white;
  }
  :last-child {
    background-color: white;
  }
`;
const ListContainer = styled.div`
  width: 100%;
  height: calc(1rem + 40px);
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
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
  const [toggleList, setToggleList] = useState();
  const [toggleMedia, setToggleMedia] = useState("Movies");
  return (
    <Container>
      <ToggleContainer>
        <Toggle>
          <h1>
            <IoEllipsisHorizontal />
          </h1>
        </Toggle>
        <Toggle>
          <h1>Popcorn movies</h1>
        </Toggle>
        <Toggle>
          <h1>{toggleMedia}</h1>
        </Toggle>
      </ToggleContainer>

      <ListContainer>
        <List>
          <Item current={pathname === "/"}>
            <LINK to="/">
              <h1>Home</h1>
            </LINK>
          </Item>
          <Item current={pathname === "/movie"}>
            <LINK to="/movie">
              <h1>Movies</h1>
            </LINK>
          </Item>
          <Item current={pathname === "/tv"}>
            <LINK to="/tv">
              <h1>TV</h1>
            </LINK>
          </Item>
          <Item current={pathname === "/search"}>
            <LINK to="/search">
              <h1>Search</h1>
            </LINK>
          </Item>
        </List>
      </ListContainer>
    </Container>
  );
};

export default withRouter(Header);
