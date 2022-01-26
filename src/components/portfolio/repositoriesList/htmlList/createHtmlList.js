import DateString from "./tools/dateString";
import IsFork from "./tools/isFork";
import { FaClock } from "react-icons/fa";
import {
  ResumeListUl,
  ResumeListLi,
  ResumeListTitle,
  ResumeListDateForkContainer,
  ResumeListDate,
  ResumeListClockIcon,
  ResumeListText,
} from "../../../../style";

export default class createHtmlList {
  static create(repositoriesList) {
    return (
      <ResumeListUl>
        {repositoriesList.map((repository) => {
          const createdDate = new Date(repository.created_at);
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={repository.name}
              href={repository.html_url}
            >
              <ResumeListLi>
                <ResumeListTitle>{repository.name}</ResumeListTitle>
                <ResumeListDateForkContainer>
                  <ResumeListDate>
                    <ResumeListClockIcon>
                      <FaClock className="list-clock-icon" />
                    </ResumeListClockIcon>
                    {DateString.formatToString(createdDate)}
                  </ResumeListDate>
                  {IsFork.check(repository.fork)}
                </ResumeListDateForkContainer>
                <ResumeListText>{repository.description}</ResumeListText>
              </ResumeListLi>
            </a>
          );
        })}
      </ResumeListUl>
    );
  }
}
