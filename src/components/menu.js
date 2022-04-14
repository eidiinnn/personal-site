import React, { Component } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import {
  MenuMain,
  MenuContainer,
  MenuLabel,
  Title,
  MenuLink,
  TitleCode,
  MenuIcon,
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
            <MenuLink
              key={item.name}
              href={item.link}
              onClick={this.modalHiddenShow}
            >
              {item.name}
            </MenuLink>
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
            Eduardo
            <TitleCode>&lt;/h1&gt; </TitleCode>
          </Title>

          <MenuIcon onClick={this.modalHiddenShow}>
            <MenuLabel> Menu </MenuLabel>
            <FaBars />
          </MenuIcon>

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
