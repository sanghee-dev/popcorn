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
    padding: 80px 10px 0;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1{
    font-size: 20px;
  }
  h2{
    font-size: 18px;
  }
  h3{
    font-size: 16px;
  }
  h4{
    font-size: 14px;
  }
`;

export default globalStyles;
