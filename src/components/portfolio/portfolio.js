import React, { Component } from "react";
import List from "./list/list";
import Tecnologias from "./tecnologias/tecnologias";
import "./portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio-section">
        <h1 className="portfolio-h1">Portfólio</h1>
        <List />
        <Tecnologias />
      </section>
    );
  }
}
