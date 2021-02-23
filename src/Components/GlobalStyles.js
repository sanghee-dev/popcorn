import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ObjectSansRegular from "../Fonts/ObjectSans-Regular.otf";
import ObjectSansSlanted from "../Fonts/ObjectSans-Slanted.otf";

const globalStyles = createGlobalStyle`
  ${reset};
  :root {
    --gray: rgb(190,184,184);
    --dark-gray: rgb(95, 95, 95);
    --light-gray:  rgb(220,204,204);
    --green: rgb(0, 255, 84);
    --red: rgb(255, 0, 0);
    
    --quadruple-space: 80px;
    --double-space: 40px;
    --space: 20px;
    --half-space: 10px;

    --h1: 28px;
    --h2: 22px;
    --h3: 18px;
    --h4: 15px;
  }
  *{
    box-sizing: border-box;
  }
  @font-face {
    font-family: "ObjectSans"; 
    font-style: normal;
    font-weight: 400;
    src: url(${ObjectSansRegular});
  }
  @font-face {
    font-family: "ObjectSans"; 
    font-style: italic;
    font-weight: 500;
    src: url(${ObjectSansSlanted});
  }
  body {
    font-family: "ObjectSans", -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--gray);
    color: black;
    padding: var(--space);
    padding-top: 80px;
    font-size: 16px;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1{
    font-size: 28px;
  }
  h2{
    font-size: 22px;
  }
  h3{
    font-size: 18px;
  }
  h4{
    font-size: 15px;
  }
`;

export default globalStyles;
