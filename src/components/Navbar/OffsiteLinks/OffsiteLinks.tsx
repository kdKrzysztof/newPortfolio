import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import links from 'data/links';

import { LinksContainer, StyledLink } from './OffsiteLinks.styles';

const OffsiteLinks = () => {
  return (
    <LinksContainer>
      <StyledLink id="linkedin" href={links.linkedin} target="_blank">
        <LinkedInIcon />
      </StyledLink>
      <StyledLink href={links.github} id="github" target="_blank">
        <GitHubIcon />
      </StyledLink>
    </LinksContainer>
  );
};

export default OffsiteLinks;
