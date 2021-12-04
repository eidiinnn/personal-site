import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./sobre.css";

export default class Sobre extends Component {
  render() {
    return (
      <section id="sobre" className="default-section sobre-section">
        <div className="sobre-container">
          <img className="sobre-profile-image" src="/profile.jpg" alt="it's me"></img>
          <h1 className="sobre-h1">Eduardo da Silva</h1>
          <p className="sobre-p">
            Tenho 23 anos e sou apaixonado por tecnologia, gosto muito de aprender coisas
            novas e sempre me disponho a isso, tenho experiência em NodeJS, MongoDB, API,
            React entre outros.
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
