import React, { Component } from "react";
import CreateRepositoriesList from "./repositoriesList/createRepositoriesList";
import PdfResume from "./pdfResume";
import { Container, ContainerTitle } from "../../style";

export default class Resume extends Component {
  render() {
    return (
      <Container id="resume">
        <ContainerTitle>Portfólio</ContainerTitle>
        <CreateRepositoriesList />
        <PdfResume />
      </Container>
    );
  }
}
