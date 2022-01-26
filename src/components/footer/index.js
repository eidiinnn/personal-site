import React, { Component } from "react";
import BackTopTop from "./backToTop";
import { FooterContainer } from "../../style";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <p>{"Copyright (c) 2021 Eduardo da Silva"}</p>
        <BackTopTop />
      </FooterContainer>
    );
  }
}
