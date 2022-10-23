import react from 'react'
import { textsAndConfigs } from '../textsAndConfigs'
import { Container, CategoryTitle, CategoryText } from '../style/global'
import { ProjectListUl, ProjectListLi, ProjectListTitle, Tech, Text} from '../style/portfolio'

export default function Experience() {
  return (
    <Container id='experience'>
      <CategoryTitle>Experiência</CategoryTitle>
      <CategoryText>Minha Experiência como desenvolvedor.</CategoryText>
      <ProjectListUl>
        {textsAndConfigs.experiences.map((job) => {
          return (
            <ProjectListLi key={job.name} noHeight>
              <ProjectListTitle>{job.name}</ProjectListTitle>
              <Tech primary marginBottom>{`${job.started} - ${job.end}`}</Tech>
              <Tech>{job.techs}</Tech>
              <Text>{job.text}</Text>
            </ProjectListLi>
          )
        })}
      </ProjectListUl>
    </Container>
  )
}
