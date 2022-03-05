import React, { Component } from "react";
import CreateRepositoriesList from "./repositoriesList/createRepositoriesList";
import Technologies from "./technologies/";
import PdfResume from "./pdfResume";
import { Container, ContainerTitle } from "../../style";

export default class Resume extends Component {
  render() {
    return (
      <Container id="resume">
        <ContainerTitle>Portfólio</ContainerTitle>
        <CreateRepositoriesList />
        <Technologies />
        <PdfResume />
      </Container>
    );
  }
}
