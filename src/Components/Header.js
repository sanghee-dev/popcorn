import React, { useEffect, useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import { IoSearch, IoEllipsisHorizontal } from "react-icons/io5";

const Container = styled.div`
  width: calc(100vw - 40px);
  position: fixed;
  top: 20px;
  z-index: 2;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space);
  & > div {
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
    color: ${(props) => (props.current ? "rgb(0, 255, 0)" : "rgb(0, 0, 0)")};
  }
  &.ellipsis {
  }
  &.Title {
    width: 100%;
    background-color: transparent;
    font-size: 28px;
    color: ${(props) =>
      props.current ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)"};
    transition: all 0.2s;
  }
  &.Search {
  }
  &.Movie {
    width: 130px;
    font-size: 23px;
  }
`;
const Ellipsis = styled.h1`
  position: absolute;
  top: 6px;
  transition: all 0.2s;
  :first-child {
    transform-origin: 50% 43.7%;
    transform: ${(props) => (props.current ? "rotate(45deg)" : "rotate(0)")};
  }
  :last-child {
    transform-origin: 50% 43.7%;
    transform: ${(props) => (props.current ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const List = styled.ul`
  width: 100%;
  background-color: white;
  padding: var(--space);
  border-radius: 20px;
  display: ${(props) => (props.current ? "block" : "none")};
`;
const Item = styled.li`
  font-size: 28px;
  color: ${(props) => (props.current ? "rgb(0, 255, 0)" : "rgb(0, 0, 0)")};
  transition: all 0.2s;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  :hover {
    color: var(--green);
  }
`;

const Header = ({ location: { pathname } }) => {
  const [toggleList, setToggleList] = useState(false);
  const [title, setTitle] = useState(true);
  const [isMovie, setIsMovie] = useState(true);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setTitle(window.scrollY < 50));
    return () => {
      window.removeEventListener("scroll", () => setTitle(window.scrollY < 50));
    };
  }, []);

  return (
    <Container>
      <ToggleContainer>
        <div>
          <Toggle
            className="ellipsis"
            onClick={() => setToggleList((prev) => !prev)}
            current={toggleList}
          >
            <Ellipsis current={toggleList}>
              <IoEllipsisHorizontal />
            </Ellipsis>
            <Ellipsis current={toggleList}>
              <IoEllipsisHorizontal />
            </Ellipsis>
          </Toggle>
          <Toggle className="Title" current={title}>
            <Link to="/">Popcorn house</Link>
          </Toggle>
        </div>

        <div>
          <Toggle
            className="Search"
            onClick={() => setSearch((prev) => !prev)}
            current={search}
          >
            <Link to="/search">
              <h1>
                <IoSearch />
              </h1>
            </Link>
          </Toggle>
          <Toggle className="Movie" onClick={() => setIsMovie((prev) => !prev)}>
            {isMovie !== true ? (
              <Link to="/movie">Movies</Link>
            ) : (
              <Link to="/tv">TV</Link>
            )}
          </Toggle>
        </div>
      </ToggleContainer>

      <List current={toggleList}>
        <Item current={pathname === "/"}>
          <Link to="/">Home</Link>
        </Item>
        <Item>Intro</Item>
        <Item>Now Playing Movies</Item>
        <Item>Upcoming Movies</Item>
        <Item>Popular Movies</Item>
        <Item>Top Rated Movies</Item>
      </List>
    </Container>
  );
};

export default withRouter(Header);
