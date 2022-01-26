import { BiError } from "react-icons/bi";
import React, { Component } from "react";
import {
  ResumeListErrorContainer,
  ResumeListErrorIcon,
  ResumeListErrorText,
} from "../../../../style";

export default class Error extends Component {
  render() {
    return (
      <ResumeListErrorContainer>
        <ResumeListErrorIcon>
          <BiError />
        </ResumeListErrorIcon>
        <ResumeListErrorText>
          Não foi possível carregar os repositórios
        </ResumeListErrorText>
      </ResumeListErrorContainer>
    );
  }
}
