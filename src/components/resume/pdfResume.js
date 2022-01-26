import React, { Component } from "react";
import { VscFilePdf } from "react-icons/vsc";
import resumePdfFile from "../../others/Resume.pdf";

import { PdfResumeContainer, PdfResumeContainerIcon } from "../../style";

export default class PdfResume extends Component {
  render() {
    return (
      <a href={resumePdfFile}>
        <PdfResumeContainer>
          <PdfResumeContainerIcon>
            <VscFilePdf />
          </PdfResumeContainerIcon>
          Portfólio em Pdf
        </PdfResumeContainer>
      </a>
    );
  }
}
