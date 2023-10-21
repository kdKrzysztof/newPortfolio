import { useTranslation } from 'react-i18next';

import { ButtonsContainer, StyledLink } from './NavLinks.styles';

const NavLinks = () => {
  const { t } = useTranslation();

  return (
    <ButtonsContainer component="nav" sx={{ flexGrow: 1 }}>
      <StyledLink>{t('HomeButton')}</StyledLink>
      <StyledLink>{t('AboutMeButton')}</StyledLink>
      <StyledLink>{t('ProjectsButton')}</StyledLink>
      <StyledLink>{t('ContactButton')}</StyledLink>
    </ButtonsContainer>
  );
};

export default NavLinks;
