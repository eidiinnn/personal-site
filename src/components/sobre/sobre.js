import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./sobre.css";

export default class Sobre extends Component {
  render() {
    return (
      <section className="sobre-section">
        <div className="sobre-container">
          <img className="sobre-profile-image" src="/profile.jpg" alt="it's me"></img>
          <h1 className="sobre-h1">Eduardo da Silva</h1>
          <p className="sobre-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum
            odio dui, ac imperdiet diam faucibus ac. Nulla blandit ipsum bibendum nibh
            pulvinar vehicula. Mauris aliquam.
          </p>
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
