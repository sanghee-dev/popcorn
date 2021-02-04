import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const HEADER = styled.header`
  width: 100%;
  height: cal(1rem + 40px);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(40, 40, 40, 0.5);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 17px -6px;
`;
const UL = styled.ul`
  display: flex;
`;
const LI = styled.li`
  padding: 20px;
  border-bottom: 2px solid
    ${(props) =>
      props.current ? "rgba(255, 255, 0, 1)" : "rgba(255, 255, 0, 0)"};
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 10px
    ${(props) =>
      props.current ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0)"};
  &:hover {
    text-shadow: 2px 2px 10px rgba(255, 255, 0, 0.5);
  }
`;
const LINK = styled(Link)`
  font-weight: 500;
`;

const Header = ({ location: { pathname } }) => {
  console.log(pathname);
  return (
    <HEADER>
      <UL>
        <LI current={pathname === ""}>
          <LINK to="">
            <h2>🍿</h2>
          </LINK>
        </LI>
        <LI current={pathname === "/"}>
          <LINK to="/">
            <h2>Movies</h2>
          </LINK>
        </LI>
        <LI current={pathname === "/tv"}>
          <LINK to="/tv">
            <h2>TV</h2>
          </LINK>
        </LI>
        <LI current={pathname === "/search"}>
          <LINK to="/search">
            <h2>Search</h2>
          </LINK>
        </LI>
      </UL>
    </HEADER>
  );
};

export default withRouter(Header);
