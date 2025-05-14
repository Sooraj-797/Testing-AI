import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  body {
    max-width: 100vw;
    position: relative;
    overflow-y: auto;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  #root::-webkit-scrollbar {
    display: none;
  }
  
  main, .main-content {
    padding-top: 80px; /* Add space for the fixed header */
    min-height: calc(100vh - 80px);
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  main::-webkit-scrollbar,
  .main-content::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles; 