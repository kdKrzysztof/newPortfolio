import { AppBar, Toolbar, styled } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%'
}));

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: theme.palette.NavbarZindex,
  paddingTop: 10,
  paddingBottom: 10
}));
