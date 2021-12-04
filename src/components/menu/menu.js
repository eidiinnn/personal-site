import React, { Component } from "react";
import "./menu.css";

export default class Menu extends Component {
  render() {
    return (
      <nav className="menu-nav">
        <h3 className="menu-h3">&lt;Eduardo&nbsp;/&gt;</h3>
        <ul className="menu-ul">
          <a href="#inicio">
            <li className="menu-li menu-li-Selected">/Início/</li>
          </a>
          <a href="#sobre">
            <li className="menu-li">/Sobre/</li>
          </a>
          <a href="#portfolio">
            <li className="menu-li">/Portfólio/</li>
          </a>
          <a href="#contato">
            <li className="menu-li">/Contato/</li>
          </a>
        </ul>
      </nav>
    );
  }
}
