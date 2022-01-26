import React, { Component } from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaReact,
  FaJsSquare,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaGithub,
} from "react-icons/fa";

import { Container, ContainerSubtitle, IconListUl, IconsListLi } from "../../../style";

export default class Tecnologias extends Component {
  render() {
    return (
      <Container noPadding>
        <ContainerSubtitle>Tecnologias que eu sei</ContainerSubtitle>
        <IconListUl>
          <IconsListLi>
            <FaJsSquare title="JavaScript" />
          </IconsListLi>
          <IconsListLi>
            <FaNode title="NodeJs" />
          </IconsListLi>
          <IconsListLi>
            <FaReact title="React" />
          </IconsListLi>
          <IconsListLi>
            <DiMongodb title="MongoDB" />
          </IconsListLi>
          <IconsListLi>
            <FaGitAlt title="Git" />
          </IconsListLi>
          <IconsListLi>
            <FaGithub title="GitHub" />
          </IconsListLi>
          <IconsListLi>
            <FaDocker title="Docker" />
          </IconsListLi>
          <IconsListLi>
            <FaFigma title="Figma" />
          </IconsListLi>
          <IconsListLi>
            <FaLinux title="Linux" />
          </IconsListLi>
        </IconListUl>
      </Container>
    );
  }
}
