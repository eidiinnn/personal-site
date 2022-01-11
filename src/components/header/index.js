import React, { Component } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { Typewriter } from "typewriting-react";
import { textsAndConfigs } from "../../textsAndConfigs";
import "./header.css";

export default class Menu extends Component {
  render() {
    return (
      <header className="header-head">
        <div className="header-container">
          <BiCodeAlt className="header-container-icon" />
          <div className="header-container-text">
            <div className="header-container-html-text">&lt;p&gt;</div>
            <p className="header-container-text-p">{textsAndConfigs.headerText}</p>
            <div className="header-container-html-text">&lt;/p&gt;</div>
          </div>
        </div>
        <div className="msg-role-para-baixo">
          <Typewriter
            cursorClassName="cursor"
            words={["(roleParaBaixo) => {}", "<RoleParaBaixo />"]}
          />
        </div>
      </header>
    );
  }
}
