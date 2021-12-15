import React, { Component } from "react";
import JsonRepositoriesListNames from "./repositoriesListNames.json";
import createHtmlList from "./htmlList/createHtmlList";

export default class CreateRepositoriesList extends Component {
  componentDidMount = () => {
    for (const repositoryName of JsonRepositoriesListNames) {
      fetch(`https://api.github.com/repos/eidiinnn/${repositoryName}`)
        .then((res) => res.json())
        .then((repositoryData) => {
          this.setState((previousState) => ({
            repositoriesList: [...previousState.repositoriesList, repositoryData],
          }));
        });
    }
  };

  state = {
    repositoriesList: [],
  };
  render() {
    const { repositoriesList } = this.state;
    return <>{createHtmlList.create(repositoriesList)};</>;
  }
}
