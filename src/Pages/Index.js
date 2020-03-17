import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Stats from "../Components/Stats";
import CountrySelector from "../Components/CountrySelector";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      body {min-height: 100vh;
        margin-top:10vw;
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);}
        select {
          margin-bottom:25px;
          padding:10px;
        }  
        
        
`;

const IndexPage = props => {
  return (
    <div>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api" />
      <CountrySelector />
    </div>
  );
};

export default IndexPage;
