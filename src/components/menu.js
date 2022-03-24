import React, { Component } from "react";
import {
  MenuContainer,
  Title,
  Nav,
  NavLink,
  TitleCode,
  AfterNameLink,
} from "../style/menu";

export default class Menu extends Component {
  componentDidMount() {
    //window.onscroll = this.scrollActions;
  }

  scrollActions() {
    const menu = document.getElementById("menu");
    this.oldScroll > this.scrollY
      ? (menu.style.animation = "menuVisible 500ms forwards")
      : (menu.style.animation = "menuHidden 500ms forwards");
    this.oldScroll = this.scrollY;
  }

  render() {
    return (
      <MenuContainer id="menu">
        <Title>
          <TitleCode>&lt;h1&gt;</TitleCode>
          &nbsp;Eduardo&nbsp;
          <TitleCode>&lt;/h1&gt; </TitleCode>
        </Title>
        <Nav>
          <NavLink href="#about">
            <AfterNameLink>./</AfterNameLink>
            Sobre
          </NavLink>
          <NavLink href="#resume">
            <AfterNameLink>./</AfterNameLink>
            Portfólio
          </NavLink>
          <NavLink href="#contact">
            <AfterNameLink>./</AfterNameLink>
            Contato
          </NavLink>
        </Nav>
      </MenuContainer>
    );
  }
}
