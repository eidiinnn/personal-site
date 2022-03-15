import React, { Component } from "react";
import CreateHtmlList from "./projects";
import {
  Container,
  CategoryTitle,
  CategoryText,
  TextHighlight,
} from "../../style/global";
import { Fade } from "react-awesome-reveal";

export default class Portfolio extends Component {
  render() {
    return (
      <Container noMarginTop id="resume">
        <Fade triggerOnce duration={2000} damping={1}>
          <CategoryTitle>&lt;Portfólio /&gt;</CategoryTitle>
          <CategoryText>
            Alguns projetos Pessoais que desenvolvi ou estou desenvolvendo no
            momento. Atualmente estou trabalhando no&nbsp;
            <TextHighlight>Fox Home</TextHighlight>.
          </CategoryText>
          <CreateHtmlList />
        </Fade>
      </Container>
    );
  }
}
