import React, { Component } from "react";
import { textsAndConfigs } from "../../textsAndConfigs";
import PdfResume from "./pdfResume";
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
            <ProjectListLi key={repository.name}>
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
          );
        })}
        <ProjectListLi center>
          <PdfResume />
        </ProjectListLi>
      </ProjectListUl>
    );
  };
}
