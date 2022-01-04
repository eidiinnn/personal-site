import React, { Component } from "react";
import JsonRepositoriesListNames from "./repositoriesListNames.json";
import Github from "./githubAPI/github";
import createHtmlList from "./htmlList/createHtmlList";

export default class CreateRepositoriesList extends Component {
  componentDidMount = () => {
    Github.createRepositoriesWithDetailsList("eidiinnn", JsonRepositoriesListNames).then(
      (returnedRepositoriesList) => {
        this.setState({
          repositoriesList: returnedRepositoriesList,
          promiseResolved: true,
        });
      }
    );
  };

  state = {
    repositoriesList: {},
    promiseResolved: false,
  };
  render() {
    if (!this.state.promiseResolved) return null;
    return <>{createHtmlList.create(this.state.repositoriesList.list)};</>;
  }
}
