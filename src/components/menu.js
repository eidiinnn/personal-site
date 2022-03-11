import React, { Component } from "react";
import { MenuContainer, Title, Nav, NavLink } from "../style/menu";

export default class Menu extends Component {
  componentDidMount() {
    window.onscroll = this.scrollActions;
  }

  scrollActions() {
    const menu = document.getElementById("menu");
    this.oldScroll > this.scrollY
      ? (menu.style.animation = "menuvisible 500ms forwards")
      : (menu.style.animation = "menuHidden 500ms forwards");
    this.oldScroll = this.scrollY;
  }

  render() {
    return (
      <MenuContainer id="menu">
        <Title>&lt;Eduardo&nbsp;/&gt;</Title>
        <Nav>
          <NavLink href="#about">./Sobre/</NavLink>
          <NavLink href="#resume">./Portfólio/</NavLink>
          <NavLink href="#contact">./Contato/</NavLink>
        </Nav>
      </MenuContainer>
    );
  }
}
