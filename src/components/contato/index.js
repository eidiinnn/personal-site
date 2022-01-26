import React, { Component } from "react";
import Email from "./sendEmail";
import {
  Container,
  ContainerTitle,
  ContactForm,
  ContactLabel,
  ContactSubmit,
  ContactInput,
  ContactTextArea,
} from "../../style";

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
      <Container id="contato">
        <ContainerTitle>Contato</ContainerTitle>
        <ContactForm id="form" onSubmit={this.email}>
          <ContactLabel>Email:</ContactLabel>
          <ContactInput id="email" type="email"></ContactInput>
          <ContactLabel>Mensagem:</ContactLabel>
          <ContactTextArea id="message"></ContactTextArea>
          <ContactSubmit type="submit" value="Enviar"></ContactSubmit>
        </ContactForm>
      </Container>
    );
  }
}
