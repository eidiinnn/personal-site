import React, { Component } from "react";
import { textsAndConfigs } from "../../../textsAndConfigs.js";
import Github from "./githubAPI/github";
import createHtmlList from "./htmlList/createHtmlList";
import Error from "./errorMessage/error";

export default class CreateRepositoriesList extends Component {
  componentDidMount = () => {
    Github.createRepositoriesWithDetailsList(
      "eidiinnn",
      textsAndConfigs.repositoriesList
    ).then((returnedRepositoriesList) => {
      this.setState({
        repositoriesList: returnedRepositoriesList,
        promiseResolved: true,
      });
    });
  };

  state = {
    repositoriesList: {},
    promiseResolved: false,
  };

  render() {
    if (!this.state.promiseResolved) return null;

    if (this.state.repositoriesList.requisitionsStatus.allFail === true)
      return (
        <>
          <Error />
        </>
      );

    return <>{createHtmlList.create(this.state.repositoriesList.list)};</>;
  }
}
