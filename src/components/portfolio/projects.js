import React, { Component } from "react";
import { textsAndConfigs } from "../../textsAndConfigs";
import {
  ProjectListUl,
  ProjectListLi,
  ProjectListTitle,
  Tech,
  Text,
  ExternalLinks,
  ExternalLinksIcons,
} from "../../style/portfolio";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default class Projects extends Component {
  componentDidMount = () => {
    this.setState({ projects: textsAndConfigs.projects });
  };

  createExternalLinks = (url, Icon) => {
    if (!url) return null;
    return (
      <ExternalLinksIcons href={url}>
        <Icon />
      </ExternalLinksIcons>
    );
  };

  state = {
    projects: [],
  };

  render = () => {
    return (
      <ProjectListUl>
        {this.state.projects.map((repository) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={repository.name}
              href={repository.html_url}
            >
              <ProjectListLi>
                <div>
                  <ProjectListTitle>{repository.name}</ProjectListTitle>
                  <Tech>{repository.tech}</Tech>
                  <Text>{repository.description}</Text>
                </div>
                <ExternalLinks>
                  {this.createExternalLinks(repository.github, FaGithub)}
                  {this.createExternalLinks(repository.link, FaExternalLinkAlt)}
                </ExternalLinks>
              </ProjectListLi>
            </a>
          );
        })}
      </ProjectListUl>
    );
  };
}
