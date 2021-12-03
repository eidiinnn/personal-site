import React, { Component } from "react";
import "./menu.css";

export default class Menu extends Component {
  render() {
    return (
      <nav className="menu-nav">
        <h3 className="menu-h3">&lt;Eduardo&nbsp;/&gt;</h3>
        <ul className="menu-ul">
          <li className="menu-li menu-li-Selected">./Início/</li>
          <li className="menu-li">Sobre</li>
          <li className="menu-li">Portifólio</li>
          <li className="menu-li">Contato</li>
        </ul>
      </nav>
    );
  }
}
