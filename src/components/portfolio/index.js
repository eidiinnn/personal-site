import React, { Component } from "react";
import CreateRepositoriesList from "./repositoriesList/createRepositoriesList";
import Tecnologias from "./tecnologias/";
import "./portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="default-section portfolio-section">
        <h1 className="default-selection-h1 portfolio-h1">Portfólio</h1>
        <CreateRepositoriesList />
        <Tecnologias />
      </section>
    );
  }
}
