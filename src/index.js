import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style/global";

import Menu from "./components/menu";
import About from "./components/about";
import Portfolio from "./components/portfolio/";
import Contact from "./components/contact";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Menu />
    <About />
    <Portfolio />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
