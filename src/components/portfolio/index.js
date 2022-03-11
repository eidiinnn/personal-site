import React, { Component } from "react";
import CreateHtmlList from "./projects";
import {
  Container,
  CategoryTitle,
  CategoryText,
  TextHighlight,
} from "../../style/global";

export default class Portfolio extends Component {
  render() {
    return (
      <Container noMarginTop id="resume">
        <CategoryTitle>&lt;Portfólio /&gt;</CategoryTitle>
        <CategoryText>
          Alguns projetos Pessoais que desenvolvi ou estou desenvolvendo no
          momento. Atualmente estou trabalhando no&nbsp;
          <TextHighlight>Fox Home</TextHighlight>.
        </CategoryText>
        <CreateHtmlList />
      </Container>
    );
  }
}
