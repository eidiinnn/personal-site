import React from "react";
import SolarSystem from "./solarSystem";
import { Fade } from "react-awesome-reveal";

import { Container, CategoryTitle, CategoryText } from "../../style/global";
import {
  SkillsContentContainer,
  TechNameUl,
  TechNameLi,
} from "../../style/skills";

export default function Skills() {
  return (
    <Container noMarginTop id="skills" style={{ overflow: "hidden" }}>
      <Fade direction="up" triggerOnce duration={1000} damping={1}>
        <CategoryTitle>Habilidades</CategoryTitle>
        <CategoryText>Tecnologias que eu utilizo:</CategoryText>

        <SkillsContentContainer>
          <TechNameUl>
            <TechNameLi color="#EFD81D">Javascript</TechNameLi>
            <TechNameLi color="#5ED3F3">React</TechNameLi>
            <TechNameLi color="#7248B6">Redux</TechNameLi>
            <TechNameLi color="#D467AB">Styled-components</TechNameLi>
            <TechNameLi color="#3594CF">Css</TechNameLi>
            <TechNameLi color="#944058">Jest</TechNameLi>
            <TechNameLi color="#2391E6">Docker</TechNameLi>
            <TechNameLi color="#0AC980">Figma</TechNameLi>
            <TechNameLi color="#E84E32">Git</TechNameLi>
            <TechNameLi color="#E8E8E8">Linux</TechNameLi>
            <TechNameLi color="#5ED3F3">Windows</TechNameLi>
          </TechNameUl>

          <SolarSystem />
        </SkillsContentContainer>
      </Fade>
    </Container>
  );
}
