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
      <section className="tecnologias-section">
        <h2 className="tecnologias-h2">Tecnologias que eu sei</h2>
        <div className="tecnologias-container-icons">
          <FaJsSquare className="tecnologias-icons" title="JavaScript" />
          <FaNode className="tecnologias-icons" title="NodeJs" />
          <FaReact className="tecnologias-icons" title="React" />
          <DiMongodb className="tecnologias-icons" title="MongoDB" />
          <FaGitAlt className="tecnologias-icons" title="Git" />
          <FaGithub className="tecnologias-icons" title="GitHub" />
          <FaDocker className="tecnologias-icons" title="Docker" />
          <FaFigma className="tecnologias-icons" title="Figma" />
          <FaLinux className="tecnologias-icons" title="Linux" />
        </div>
      </section>
    );
  }
}
