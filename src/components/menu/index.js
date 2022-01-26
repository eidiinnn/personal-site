import React, { Component } from "react";
import { NavMenu, NavTitle, NavUl, NavLi, NavLink } from "../../style";

export default class Menu extends Component {
  render() {
    return (
      <NavMenu>
        <NavTitle>&lt;Eduardo&nbsp;/&gt;</NavTitle>
        <NavUl>
          <NavLi>
            <NavLink href="#inicio">/Início/</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#sobre">/Sobre/</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#portfolio">/Portfólio/</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#contato">/Contato/</NavLink>
          </NavLi>
        </NavUl>
      </NavMenu>
    );
  }
}
