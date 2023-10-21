import { ButtonsContainer, StyledLink } from './NavLinks.styles';

const NavLinks = () => {
  return (
    <ButtonsContainer sx={{ flexGrow: 1 }}>
      <StyledLink>Home</StyledLink>
      <StyledLink>About me</StyledLink>
      <StyledLink>Projects</StyledLink>
      <StyledLink>Contact</StyledLink>
    </ButtonsContainer>
  );
};

export default NavLinks;
