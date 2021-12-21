import DateString from "./tools/dateString";
import IsFork from "./tools/isFork";
import { FaClock } from "react-icons/fa";
import "./htmlList.css";

export default class createHtmlList {
  static create(repositoriesList) {
    return (
      <ul className="list-ul">
        {repositoriesList.map((repository) => {
          const createdDate = new Date(repository.created_at);
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={repository.name}
              href={repository.html_url}
            >
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
    );
  }
}
