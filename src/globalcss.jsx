import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-family: 'Montserrat Alternates', sans-serif;
  }

  html, body{
    height: 100%;
    width: 100%;
  }

  body{
	background-color: #0048a4;
  }
`;

export default GlobalCSS;
