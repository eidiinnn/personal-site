import React, { Component } from "react";
import jsonList from "./list.json";
import DateString from "./tools/dateString";
import isFork from "./tools/isFork";
import { FaClock } from "react-icons/fa";
import "./list.css";

export default class list extends Component {
  componentDidMount = () => {
    for (const value of jsonList) {
      fetch(`https://api.github.com/repos/eidiinnn/${value}`)
        .then((res) => res.json())
        .then((result) => {
          this.setState((previousState) => ({
            reposList: [...previousState.reposList, result],
          }));
        });
    }
  };

  state = {
    reposList: [],
  };
  render() {
    const { reposList } = this.state;
    return (
      <div>
        <ul className="list-ul">
          {reposList.map((repos) => {
            const createDate = new Date(repos.created_at);
            return (
              <a key={repos.name} href={repos.html_url}>
                <li href={repos.html_url} className="list-li">
                  <h2 className="list-h2">{repos.name}</h2>
                  <div className="list-dateFork">
                    <div className="list-clock-date">
                      <FaClock className="list-clock-icon" />
                      {DateString.create(createDate)}
                    </div>
                    {isFork.check(repos.fork)}
                  </div>
                  <p className="list-p">{repos.description}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}
