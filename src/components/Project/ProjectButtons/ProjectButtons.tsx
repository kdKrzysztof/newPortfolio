import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ProjectSwitchButton } from './ProjectButtons.styles';

interface IProjectButtons {
  direction: 'left' | 'right';
}

const ProjectButtons = ({ direction }: IProjectButtons) => {
  return direction === 'left' ? (
    <ProjectSwitchButton>
      <ArrowBackIosNewIcon />
    </ProjectSwitchButton>
  ) : (
    <ProjectSwitchButton>
      <ArrowForwardIosIcon />
    </ProjectSwitchButton>
  );
};

export default ProjectButtons;
