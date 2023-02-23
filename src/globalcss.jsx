import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default GlobalCSS;
