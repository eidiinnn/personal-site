import React, { Component } from "react";
import Email from "./sendEmail";
import { FaSmile } from "react-icons/fa";
import {
  Form,
  Submit,
  InputTextEmail,
  TextArea,
  LinksContainer,
  LinksIconSmile,
  LinksTitle,
  LinksList,
  Link,
} from "../../style/contact";
import { Container, CategoryTitle, CategoryText } from "../../style/global";

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
        <CategoryTitle>&lt;Contato /&gt;</CategoryTitle>
        <CategoryText>
          Entre em Contato comigo via Email ou através dos links.
        </CategoryText>

        <Container row noMargin spaceBetween>
          <Form id="form" onSubmit={this.email}>
            <InputTextEmail
              id="name"
              type="text"
              placeholder="Nome"
            ></InputTextEmail>
            <InputTextEmail
              id="email"
              type="email"
              placeholder="Email"
            ></InputTextEmail>
            <TextArea id="message" placeholder="Mensagem"></TextArea>
            <Submit type="submit" value="Enviar"></Submit>
          </Form>

          <LinksContainer>
            <LinksIconSmile>
              <FaSmile />
            </LinksIconSmile>
            <LinksTitle>Meus Links</LinksTitle>
            <LinksList>
              <Link href="www.linkedin.com/in/eduardosilvapn">
                /Linkedin/&nbsp;
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=5548996303675">
                /WhatsApp/&nbsp;
              </Link>
              <Link href="https://twitter.com/eidiin_">/Twitter/&nbsp;</Link>
              <Link href="https://github.com/eidiinnn">/Github/</Link>
            </LinksList>
          </LinksContainer>
        </Container>
      </Container>
    );
  }
}
