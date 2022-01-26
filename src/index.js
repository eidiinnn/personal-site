import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style";

import Menu from "./components/menu";
import Header from "./components/header";
import Sobre from "./components/sobre";
import Portfolio from "./components/portfolio/";
import Contato from "./components/contato";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Menu />
    <Header />
    <Sobre />
    <Portfolio />
    <Contato />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
