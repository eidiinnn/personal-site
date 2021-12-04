import React, { Component } from "react";
import "./contato.css";

export default class Contato extends Component {
  render() {
    return (
      <section className="default-section contato-section">
        <h1 className="default-selection-h1 contato-h1">Contato</h1>
        <form className="contato-form" action="" method="post">
          <label className="contato-label">Email:</label>
          <input className="contato-input" type="email"></input>
          <label className="contato-label">Mensagem:</label>
          <textarea className="contato-input contato-input-text"></textarea>
          <input className="contato-submit" type="submit" value="Enviar"></input>
        </form>
      </section>
    );
  }
}
