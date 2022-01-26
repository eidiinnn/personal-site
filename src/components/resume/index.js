import React, { Component } from "react";
import CreateRepositoriesList from "./repositoriesList/createRepositoriesList";
import Tecnologias from "./technologies/";
import { Container, ContainerTitle } from "../../style";

export default class Resume extends Component {
  render() {
    return (
      <Container id="resume">
        <ContainerTitle>Portfólio</ContainerTitle>
        <CreateRepositoriesList />
        <Tecnologias />
      </Container>
    );
  }
}
