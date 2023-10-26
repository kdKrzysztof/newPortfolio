import { AppBar, Toolbar, styled } from '@mui/material';

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: theme.palette.NavbarZindex,
  paddingTop: 10,
  paddingBottom: 10
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  width: '80%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    maxHeight: theme.mixins.toolbar.minHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflowY: 'hidden',
    '& > :first-of-type': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      '& > *': {
        marginTop: 10,
        marginBottom: 10
      }
    }
  }
}));
