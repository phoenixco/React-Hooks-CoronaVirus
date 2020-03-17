import React from "react";
import ReactDOM from "react-dom";

import IndexPage from "./Pages/Index.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>,
  rootElement
);
