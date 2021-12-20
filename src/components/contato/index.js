import React, { Component } from "react";
import Email from "./sendEmail";
import "./contato.css";

export default class Contato extends Component {
  email = (event) => {
    event.preventDefault();
    const newEmailToSend = new Email(
      event.target.email.value,
      event.target.message.value
    );
    newEmailToSend.sendEmail().then((returnMessage) => {
      alert(returnMessage);
    });
  };

  render() {
    return (
      <section id="contato" className="default-section contato-section">
        <h1 className="default-selection-h1 contato-h1">Contato</h1>
        <form id="form" className="contato-form" onSubmit={this.email}>
          <label className="contato-label">Email:</label>
          <input id="email" className="contato-input" type="email"></input>
          <label className="contato-label">Mensagem:</label>
          <textarea id="message" className="contato-input contato-input-text"></textarea>
          <input className="contato-submit" type="submit" value="Enviar"></input>
        </form>
      </section>
    );
  }
}
