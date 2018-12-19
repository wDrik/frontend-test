import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;
  }

  body {
    background: #453995;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }

  .particles {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    display: flex;
  }
`;

export default GlobalStyles;
