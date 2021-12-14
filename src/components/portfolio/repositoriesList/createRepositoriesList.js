import React, { Component } from "react";
import JsonRepositoriesListNames from "./repositoriesListNames.json";
import DateString from "./tools/dateString";
import IsFork from "./tools/isFork";
import { FaClock } from "react-icons/fa";
import "./repositoriesList.css";

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
    return (
      <div>
        <ul className="list-ul">
          {repositoriesList.map((repository) => {
            const createdDate = new Date(repository.created_at);
            return (
              <a key={repository.name} href={repository.html_url}>
                <li href={repository.html_url} className="list-li">
                  <h2 className="list-h2">{repository.name}</h2>
                  <div className="list-dateFork">
                    <div className="list-clock-date">
                      <FaClock className="list-clock-icon" />
                      {DateString.formatToString(createdDate)}
                    </div>
                    {IsFork.check(repository.fork)}
                  </div>
                  <p className="list-p">{repository.description}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}
