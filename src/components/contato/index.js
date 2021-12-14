import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contato.css";

export default class Contato extends Component {
  email = (event) => {
    event.preventDefault();
    const clientContactSubmit = {
      from_name: event.target.from_name.value,
      message: event.target.message.value,
    };
    if (!clientContactSubmit.from_name || !clientContactSubmit.message)
      return alert("Não pode haver espaço vazio");
    emailjs
      .send(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        clientContactSubmit,
        process.env.REACT_APP_USER
      )
      .then(
        (response) => {
          alert("Enviado");
        },
        (err) => {
          alert(
            "Error, entre em contato comigo diretamente em eduardosilva.pn@gmail.com"
          );
        }
      );
  };

  render() {
    return (
      <section id="contato" className="default-section contato-section">
        <h1 className="default-selection-h1 contato-h1">Contato</h1>
        <form id="form" className="contato-form" onSubmit={this.email}>
          <label className="contato-label">Email:</label>
          <input id="from_name" className="contato-input" type="email"></input>
          <label className="contato-label">Mensagem:</label>
          <textarea id="message" className="contato-input contato-input-text"></textarea>
          <input className="contato-submit" type="submit" value="Enviar"></input>
        </form>
      </section>
    );
  }
}
