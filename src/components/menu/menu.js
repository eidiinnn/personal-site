import React, { Component } from "react";
import "./style.css";
import "../FontAndColors/style.css";

export default class Menu extends Component {
  render() {
    return (
      <nav>
        <h1>&lt;Eduardo&nbsp;/&gt;</h1>
        <ul>
          <li className="liSelected">./Início/</li>
          <li>Sobre</li>
          <li>Portifólio</li>
          <li>Contato</li>
        </ul>
      </nav>
    );
  }
}
