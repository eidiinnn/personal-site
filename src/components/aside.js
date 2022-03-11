import React, { Component } from "react";
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { LinkIconContainers, IconsLinks } from "../style/aside";

export default class Aside extends Component {
  render() {
    return (
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
    );
  }
}
