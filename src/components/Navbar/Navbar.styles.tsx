import { Toolbar, styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  paddingBottom: 10,
  zIndex: theme.NavbarZindex
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '0 !important',
  maxHeight: theme.mixins.toolbar.minHeight,
  // background: theme.palette.AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)'
}));
