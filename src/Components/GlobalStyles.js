import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: rgb(40, 40, 40);
    color: white;
    padding-top: 58px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1{
    font-size: 28px;
  }
  h2{
    font-size: 18px;
  }
  h3{
    font-size: 12px;
  }
`;

export default globalStyles;
