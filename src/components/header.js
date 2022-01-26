import React, { Component } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { Typewriter } from "typewriting-react";
import { textsAndConfigs } from "../textsAndConfigs";
import {
  Header,
  ShortText,
  HeaderIconTextContainer,
  HeaderIcon,
  HeaderRoleParaBaixo,
} from "../style";

export default class Menu extends Component {
  render() {
    return (
      <Header id="inicio">
        <HeaderIconTextContainer>
          <HeaderIcon>
            <BiCodeAlt />
          </HeaderIcon>
          <ShortText>{textsAndConfigs.headerText}</ShortText>
        </HeaderIconTextContainer>
        <HeaderRoleParaBaixo>
          <Typewriter
            cursorClassName="cursor"
            words={["(roleParaBaixo) => {}", "<RoleParaBaixo />"]}
          />
        </HeaderRoleParaBaixo>
      </Header>
    );
  }
}
