import { Box, Toolbar, styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  paddingTop: 10,
  paddingBottom: 10,
  background: theme.palette.AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: theme.NavbarZindex
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  width: '80%',
  [theme.breakpoints.down('md')]: {
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

export const NavContentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
});
