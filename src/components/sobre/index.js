import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { textsAndConfigs } from "../../textsAndConfigs";
import profile from "./profile.jpg";
import {
  Container,
  ShortText,
  MyName,
  ProfileImage,
  IconContainer,
  IconLink,
} from "../../style";

export default class Sobre extends Component {
  render() {
    return (
      <Container id="sobre">
        <ProfileImage src={profile} alt="it's me"></ProfileImage>
        <MyName>Eduardo da Silva</MyName>
        <ShortText center>{textsAndConfigs.sobreMimText}</ShortText>
        <IconContainer>
          <IconLink href="https://github.com/eidiinnn">
            <FaGithub className="sobre-icons" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/eduardo-silva-pn">
            <FaLinkedin className="sobre-icons" />
          </IconLink>
        </IconContainer>
      </Container>
    );
  }
}
