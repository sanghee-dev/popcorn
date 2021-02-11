import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  :root {
    --main-color: rgb(190,184,184);
    --default-space: 20px;
  }
  *{
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--main-color);
    color: black;
    padding: var(--default-space);
    padding-top: 200px;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1{
    font-size: 28px;
  }
  h2{
    font-size: 23px;
  }
  h3{
    font-size: 16px;
  }
  h4{
    font-size: 12px;
  }
`;

export default globalStyles;
