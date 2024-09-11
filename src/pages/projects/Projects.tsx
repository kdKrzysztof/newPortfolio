import { Typography } from '@mui/material';

import { Project } from 'components';

import { ProjectBody, ProjectContainer, ProjectHeader } from './Projects.styles';

const Projects = () => {
  return (
    <ProjectBody>
      <ProjectContainer>
        <ProjectHeader>
          <Typography variant="h4" color="primary">
            Projects
          </Typography>
        </ProjectHeader>
        <Project />
      </ProjectContainer>
    </ProjectBody>
  );
};

export default Projects;
