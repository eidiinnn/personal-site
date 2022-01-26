import React, { Component } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./backToTop.css";
import { BackToTopCircle } from "../../../style";

export default class BackTopTop extends Component {
  render() {
    return (
      <a href="#inicio">
        <BackToTopCircle>
          <FaArrowUp />
        </BackToTopCircle>
      </a>
    );
  }
}
