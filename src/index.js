import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style";

import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume/";
import Contact from "./components/contact";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <Header />
    <About />
    <Resume />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
