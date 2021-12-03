import React, { Component } from "react";
import "./sobre.css";

export default class Sobre extends Component {
  render() {
    return (
      <article className="sobre-article">
        <div className="sobre-container">
          <img className="sobre-profile-image" src="/profile.jpg" alt="it's me"></img>
          <h1 className="sobre-h1">Eduardo da Silva</h1>
          <p className="sobre-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum
            odio dui, ac imperdiet diam faucibus ac. Nulla blandit ipsum bibendum nibh
            pulvinar vehicula. Mauris aliquam.
          </p>
        </div>
      </article>
    );
  }
}
