import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style";

import Navbar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio/";
import Contact from "./components/contact";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
