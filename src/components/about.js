import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { textsAndConfigs } from "../textsAndConfigs";
import profile from "../images/aboutImage.gif";

import {
  Title,
  TitleBiggerText,
  Text,
  ProfileImage,
  IconContainer,
  IconLink,
  TextContainer,
} from "../style/about";
import { Container } from "../style/global";

export default class About extends Component {
  render() {
    return (
      <Container row vh100 alignCenter noMargin reverseColumn id="about">
        <TextContainer>
          <Title>
            Olá, Meu nome é<br />
            <TitleBiggerText>
              Eduardo da Silva. <br />
              Desenvolvedor Front-end
            </TitleBiggerText>
          </Title>
          <Text>{textsAndConfigs.aboutMeText}</Text>
          <IconContainer>
            <IconLink href="https://github.com/eidiinnn">
              <FaGithub className="sobre-icons" />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/eduardo-silva-pn">
              <FaLinkedin className="sobre-icons" />
            </IconLink>
          </IconContainer>
        </TextContainer>

        <ProfileImage src={profile} alt="it's me"></ProfileImage>
      </Container>
    );
  }
}
