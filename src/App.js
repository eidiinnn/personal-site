import React from "react";
import "./App.css";
import "./components/FontAndColors/style.css";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import Sobre from "./components/sobre/sobre";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Sobre />
    </div>
  );
}

export default App;
