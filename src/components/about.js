import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { textsAndConfigs } from "../textsAndConfigs";
import profile from "../images/aboutImage.png";

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
import { Fade } from "react-awesome-reveal";

export default class About extends Component {
  render() {
    return (
      <Container row vh100 alignCenter noMargin reverseColumn id="about">
        <TextContainer>
          <Fade direction="up" triggerOnce duration={1000} damping={1}>
            <Title>
              Olá, Meu nome é<br />
              <TitleBiggerText>
                Eduardo da Silva. <br />
                Desenvolvedor Front-end
              </TitleBiggerText>
            </Title>
          </Fade>
          <Fade
            direction="up"
            delay={600}
            triggerOnce
            duration={1000}
            damping={1}
          >
            <Text>{textsAndConfigs.aboutMeText}</Text>
            <IconContainer>
              <IconLink href="https://github.com/eidiinnn">
                <FaGithub className="sobre-icons" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/eduardo-silva-pn">
                <FaLinkedin className="sobre-icons" />
              </IconLink>
            </IconContainer>
          </Fade>
        </TextContainer>

        <Fade
          triggerOnce
          direction="right"
          duration={1000}
          damping={1}
          className="profileImageAnimation"
        >
          <ProfileImage src={profile} alt="it's me"></ProfileImage>
        </Fade>
      </Container>
    );
  }
}
