import React, { Component } from "react";
import BackTopTop from "./backToTop/backToTop";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer-section">
        <p>{"Copyright (c) 2021 Eduardo da Silva"}</p>
        <BackTopTop />
      </section>
    );
  }
}
