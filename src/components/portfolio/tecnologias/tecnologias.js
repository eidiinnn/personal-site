import React, { Component } from "react";
import "./tecnologias.css";
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

export default class Tecnologias extends Component {
  render() {
    return (
      <section class="tecnologias-section">
        <h2 class="tecnologias-h2">Tecnologias que eu sei</h2>
        <div class="tecnologias-container-icons">
          <FaJsSquare class="tecnologias-icons" title="JavaScript" />
          <FaNode class="tecnologias-icons" title="NodeJs" />
          <FaReact class="tecnologias-icons" title="React" />
          <DiMongodb class="tecnologias-icons" title="MongoDB" />
          <FaGitAlt class="tecnologias-icons" title="Git" />
          <FaGithub class="tecnologias-icons" title="GitHub" />
          <FaDocker class="tecnologias-icons" title="Docker" />
          <FaFigma class="tecnologias-icons" title="Figma" />
          <FaLinux class="tecnologias-icons" title="Linux" />
        </div>
      </section>
    );
  }
}
