import React, { Component } from "react";
import {
  MenuContainer,
  Title,
  Nav,
  NavLink,
  LinkIconContainers,
  IconsLinks,
} from "../style/menu";

import { FaGithub, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default class Menu extends Component {
  render() {
    return (
      <>
        <MenuContainer>
          <Title>&lt;Eduardo&nbsp;/&gt;</Title>
          <Nav>
            <NavLink href="#about">./Sobre/</NavLink>
            <NavLink href="#resume">./Portfólio/</NavLink>
            <NavLink href="#contact">./Contato/</NavLink>
          </Nav>
        </MenuContainer>

        <LinkIconContainers>
          <IconsLinks href="www.linkedin.com/in/eduardosilvapn">
            <FaLinkedinIn />
          </IconsLinks>
          <IconsLinks href="https://api.whatsapp.com/send?phone=5548996303675">
            <FaWhatsapp />
          </IconsLinks>
          <IconsLinks href="https://twitter.com/eidiin_">
            <FaTwitter />
          </IconsLinks>
          <IconsLinks href="https://github.com/eidiinnn">
            <FaGithub />
          </IconsLinks>
        </LinkIconContainers>
      </>
    );
  }
}
