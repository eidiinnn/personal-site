import React, { Component } from "react";
import BackTopTop from "./backToTop/backToTop";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <section class="footer-section">
        <p>© 2021 Eduardo da Silva. Todos os direitos reservados.</p>
        <BackTopTop />
      </section>
    );
  }
}
