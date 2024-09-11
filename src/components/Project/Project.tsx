import { ProjectBody, ProjectImageContainer } from './Project.styles';
import ProjectButtons from './ProjectButtons';

const Project = () => {
  return (
    <ProjectBody>
      <ProjectButtons direction="left" />
      <ProjectImageContainer></ProjectImageContainer>
      <ProjectButtons direction="right" />
    </ProjectBody>
  );
};

export default Project;
