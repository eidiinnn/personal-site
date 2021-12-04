import React, { Component } from "react";
import DateString from "./tools/dateString";
import isFork from "./tools/isFork";
import { FaClock } from "react-icons/fa";
import "./list.css";

export default class list extends Component {
  componentDidMount = () => {
    fetch("https://api.github.com/users/eidiinnn/repos")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          reposList: result,
        });
      });
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
            const createDate = new Date(repos.updated_at);
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
