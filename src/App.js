import React from "react";
import "./App.css";
import "./components/defaultCss/style.css";
import Menu from "./components/menu";
import Header from "./components/header";
import Sobre from "./components/sobre";
import Portfolio from "./components/portfolio/";
import Contato from "./components/contato";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Sobre />
      <Portfolio />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
