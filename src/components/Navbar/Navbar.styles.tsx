import { AppBar, Grid, styled } from '@mui/material';

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: theme.palette.NavbarZindex,
  paddingTop: 10,
  paddingBottom: 10
}));

export const GridContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
