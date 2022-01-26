import React, { Component } from "react";
import { NavMenu, NavTitle, NavUl, NavLi, NavLink } from "../style";

export default class Navbar extends Component {
  render() {
    return (
      <NavMenu>
        <NavTitle>&lt;Eduardo&nbsp;/&gt;</NavTitle>
        <NavUl>
          <NavLi>
            <NavLink href="#home">/Início/</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#about">/Sobre/</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#resume">/Portfólio/</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#contact">/Contato/</NavLink>
          </NavLi>
        </NavUl>
      </NavMenu>
    );
  }
}
