import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PermContactCalendarSharpIcon from '@mui/icons-material/PermContactCalendarSharp';
import PsychologyAltSharpIcon from '@mui/icons-material/PsychologyAltSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import { useTranslation } from 'react-i18next';

import { ButtonsContainer, LinkContainer, StyledLink } from './NavLinks.styles';

const NavLinks = () => {
  const { t } = useTranslation();

  return (
    <ButtonsContainer component="nav">
      <LinkContainer>
        <HomeSharpIcon />
        <StyledLink>{t('HomeButton')}</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <PsychologyAltSharpIcon />
        <StyledLink>{t('AboutMeButton')}</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <WorkSharpIcon />
        <StyledLink>{t('ProjectsButton')}</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <PermContactCalendarSharpIcon />
        <StyledLink>{t('ContactButton')}</StyledLink>
      </LinkContainer>
    </ButtonsContainer>
  );
};

export default NavLinks;
