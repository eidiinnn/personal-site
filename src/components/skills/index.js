import React from "react";
import SolarSystem from "./solarSystem";
import { Fade } from "react-awesome-reveal";

import {
  Container,
  CategoryTitle,
  CategoryText,
  TextHighlight,
} from "../../style/global";

export default function Skills() {
  return (
    <Container noMarginTop id="skills" style={{ overflow: "hidden" }}>
      <Fade direction="up" triggerOnce duration={1000} damping={1}>
        <CategoryTitle>Habilidades</CategoryTitle>
        <CategoryText>
          Front-end com <TextHighlight>React</TextHighlight> e outras
          tenoclogias como <TextHighlight>Html/Css</TextHighlight>,{" "}
          <TextHighlight>JavaScript</TextHighlight>,{" "}
          <TextHighlight>Styled-components</TextHighlight>,{" "}
          <TextHighlight>Jest</TextHighlight>,{" "}
          <TextHighlight>Redux</TextHighlight> e{" "}
          <TextHighlight>Docker</TextHighlight>. Minhas tecnologias favoritas
          são:
        </CategoryText>

        <SolarSystem />
      </Fade>
    </Container>
  );
}
