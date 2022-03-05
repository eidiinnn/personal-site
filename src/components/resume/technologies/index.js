import React, { Component } from "react";
import { SiRedux } from "react-icons/si";
import {
  FaReact,
  FaJsSquare,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaGithub,
} from "react-icons/fa";

import {
  Container,
  ContainerSubtitle,
  IconListUl,
  IconsListLi,
  IconsTitle,
} from "../../../style";

export default class Technologies extends Component {
  render() {
    return (
      <Container noPadding>
        <ContainerSubtitle>Tecnologias que eu sei</ContainerSubtitle>
        <IconListUl>
          <IconsListLi>
            <FaJsSquare />
            <IconsTitle>Javascript</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <FaReact />
            <IconsTitle>React</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <SiRedux />
            <IconsTitle>Redux</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <FaGitAlt />
            <IconsTitle>Git</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <FaGithub />
            <IconsTitle>GitHub</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <FaDocker />
            <IconsTitle>Docker</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <FaFigma />
            <IconsTitle>Figma</IconsTitle>
          </IconsListLi>
          <IconsListLi>
            <FaLinux />
            <IconsTitle>Linux</IconsTitle>
          </IconsListLi>
        </IconListUl>
      </Container>
    );
  }
}
