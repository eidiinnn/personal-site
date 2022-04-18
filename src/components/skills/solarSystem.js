import React from "react";
import { SkillsUrl, SkillsLi, TechDiv, TechCenter } from "../../style/skills";
import {
  SiStyledcomponents,
  SiRedux,
  SiJavascript,
  SiReact,
  SiJest,
} from "react-icons/si";

export default function SolarSystem() {
  return (
    <SkillsUrl>
      <TechCenter>
        <SiJavascript />
      </TechCenter>
      <SkillsLi size="7.5rem" speed="3s">
        <TechDiv speed="3s">
          <SiReact />
        </TechDiv>
      </SkillsLi>
      <SkillsLi size="14.5rem" speed="10s">
        <TechDiv speed="10s">
          <SiStyledcomponents />
        </TechDiv>
      </SkillsLi>
      <SkillsLi size="21.5rem" speed="4s">
        <TechDiv speed="4s">
          <SiRedux />
        </TechDiv>
      </SkillsLi>
      <SkillsLi size="28.5rem" speed="14s">
        <TechDiv speed="14s">
          <SiJest />
        </TechDiv>
      </SkillsLi>
    </SkillsUrl>
  );
}
