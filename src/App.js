import React from "react";
import "./App.css";
import "./components/defaultCss/style.css";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import Sobre from "./components/sobre/sobre";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Sobre />
      <Portfolio />
    </div>
  );
}

export default App;
