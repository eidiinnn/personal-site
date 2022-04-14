import React, { Component } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import {
  MenuMain,
  MenuContainer,
  MenuLabel,
  Title,
  Nav,
  NavLink,
  TitleCode,
  MobileMenu,
  MenuModal,
  CloseModal,
} from "../style/menu";

export default class Menu extends Component {
  modalHiddenShow = () => {
    return this.setState({ modalOpen: this.state.modalOpen ? false : true });
  };

  createNavLinks = () => {
    return (
      <>
        {this.state.links.map((item) => {
          return (
            <NavLink
              key={item.name}
              href={item.link}
              onClick={this.modalHiddenShow}
            >
              {item.name}
            </NavLink>
          );
        })}
      </>
    );
  };

  state = {
    modalOpen: false,
    links: [
      { name: "./Sobre", link: "#about" },
      { name: "./Portfólio", link: "#portfolio" },
      { name: "./Contato", link: "#contact" },
    ],
  };

  render() {
    return (
      <MenuMain>
        <MenuContainer>
          <Title>
            <TitleCode>&lt;h1&gt;</TitleCode>
            &nbsp;Eduardo&nbsp;
            <TitleCode>&lt;/h1&gt; </TitleCode>
          </Title>

          <MobileMenu onClick={this.modalHiddenShow}>
            <MenuLabel> Menu </MenuLabel>
            <FaBars />
          </MobileMenu>

          <MenuModal MenuModal visible={this.state.modalOpen}>
            {this.createNavLinks()}
            <CloseModal onClick={this.modalHiddenShow}>
              <FaRegTimesCircle />
            </CloseModal>
          </MenuModal>
        </MenuContainer>
      </MenuMain>
    );
  }
}
