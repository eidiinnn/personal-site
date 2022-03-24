import React, { Component } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import {
  MenuContainer,
  Title,
  Nav,
  NavLink,
  TitleCode,
  MobileMenu,
  MenuModal,
  CloseModal,
} from "../style/menu";

export default class Menu extends Component {
  modalAction = () => {
    if (window.innerWidth <= 737)
      return this.setState({ modalOpen: this.state.modalOpen ? false : true });
  };

  state = {
    modalOpen: false,
    links: [
      { name: "Sobre", link: "#about" },
      { name: "Portfólio", link: "#portfolio" },
      { name: "Contato", link: "#contact" },
    ],
  };

  createNavLinks = () => {
    return (
      <>
        {this.state.links.map((item) => {
          return (
            <NavLink
              key={item.name}
              href={item.link}
              onClick={this.modalAction}
            >
              {item.name}
            </NavLink>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <MenuContainer id="menu">
        <Title>
          <TitleCode>&lt;h1&gt;</TitleCode>
          &nbsp;Eduardo&nbsp;
          <TitleCode>&lt;/h1&gt; </TitleCode>
        </Title>

        <Nav>{this.createNavLinks()}</Nav>

        <MobileMenu onClick={this.modalAction}>
          <FaBars />
        </MobileMenu>

        <MenuModal MenuModal visible={this.state.modalOpen}>
          {this.createNavLinks()}
          <CloseModal onClick={this.modalAction}>
            <FaRegTimesCircle />
          </CloseModal>
        </MenuModal>
      </MenuContainer>
    );
  }
}
