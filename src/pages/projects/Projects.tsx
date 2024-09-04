import { Project } from 'components';

import { ProjectBody, ProjectContainer } from './Projects.styles';

const Projects = () => {
  return (
    <ProjectBody>
      <ProjectContainer>
        <Project />
      </ProjectContainer>
    </ProjectBody>
  );
};

export default Projects;
