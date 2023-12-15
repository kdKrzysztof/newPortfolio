import { Toolbar, styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  height: 'auto',
  paddingBottom: 10,
  zIndex: theme.NavbarZindex
}));

interface StyledToolbarProps {
  changeBg: boolean;
}

export const StyledToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'changeBg'
})<StyledToolbarProps>(({ theme, changeBg }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '0 !important',
  paddingTop: '30px !important',
  maxHeight: theme.mixins.toolbar.minHeight,
  background: changeBg ? theme.palette.background.default : 'transparent',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  transition: 'background 200ms'
}));
