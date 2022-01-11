import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./sobre.css";
import { textsAndConfigs } from "../../textsAndConfigs";
import profile from "./profile.jpg";

export default class Sobre extends Component {
  render() {
    return (
      <section id="sobre" className="default-section sobre-section">
        <div className="sobre-container">
          <img className="sobre-profile-image" src={profile} alt="it's me"></img>
          <h1 className="sobre-h1">Eduardo da Silva</h1>
          <p className="sobre-p">{textsAndConfigs.sobreMimText}</p>
          <div className="sobre-icons-container">
            <a href="https://github.com/eidiinnn">
              <FaGithub className="sobre-icons" />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-silva-pn">
              <FaLinkedin className="sobre-icons" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
