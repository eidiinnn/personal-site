import React, { Component } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { Typewriter } from "typewriting-react";
import "./header.css";

export default class Menu extends Component {
  render() {
    return (
      <header className="header-head">
        <div className="header-container">
          <BiCodeAlt className="header-container-icon" />
          <div className="header-container-text">
            <div className="header-container-html-text">&lt;p&gt;</div>
            <p className="header-container-text-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum
              odio dui, ac imperdiet diam faucibus ac. Nulla blandit ipsum bibendum nibh
              pulvinar vehicula. Mauris aliquam
            </p>
            <div className="header-container-html-text">&lt;/p&gt;</div>
          </div>
        </div>
        <div className="msg-role-para-baixo">
          <Typewriter
            cursorClassName="msg-role-para-baixo-cursor"
            words={["(roleParaBaixo) => {}", "<RoleParaBaixo />"]}
          />
        </div>
      </header>
    );
  }
}
