import React, { Component } from "react";
import Email from "./sendEmail";
import {
  Container,
  ContainerTitle,
  ContactForm,
  ContactSubmit,
  ContactInput,
  ContactTextArea,
} from "../../style";

export default class Contact extends Component {
  email = (event) => {
    event.preventDefault();
    const newEmailToSend = new Email(
      event.target.name.value,
      event.target.email.value,
      event.target.message.value
    );
    newEmailToSend.sendEmail().then((returnMessage) => {
      alert(returnMessage);
    });
  };

  render() {
    return (
      <Container id="contact">
        <ContainerTitle>Contato</ContainerTitle>
        <ContactForm id="form" onSubmit={this.email}>
          <ContactInput id="name" type="text" placeholder="Nome"></ContactInput>
          <ContactInput
            id="email"
            type="email"
            placeholder="Email"
          ></ContactInput>
          <ContactTextArea
            id="message"
            placeholder="Mensagem"
          ></ContactTextArea>
          <ContactSubmit type="submit" value="Enviar"></ContactSubmit>
        </ContactForm>
      </Container>
    );
  }
}
