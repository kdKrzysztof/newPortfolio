import { Toolbar, styled } from '@mui/material';

interface StyledHeaderProps {
  changeBg: boolean;
}

export const StyledHeader = styled('header', {
  shouldForwardProp: (prop) => prop !== 'changeBg'
})<StyledHeaderProps>(({ theme, changeBg }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  minHeight: 'auto',
  paddingBottom: theme.mixins.navbarButtonPadding,
  background: changeBg ? theme.palette.background.AppbarBackground : 'transparent',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  transition: 'background 200ms',
  zIndex: theme.NavbarZindex
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1920px',
  height: '100%',
  padding: '0 !important',
  paddingTop: theme.mixins.navbarButtonPadding
}));
