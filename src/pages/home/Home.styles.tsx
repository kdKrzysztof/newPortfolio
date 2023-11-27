import { Box, Button, Typography, styled } from '@mui/material';

export const HomeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'transparent',
  overflowX: 'hidden'
}));

export const HomeMainTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: 20
}));

export const HomeContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70%',
  [theme.breakpoints.down('md')]: {
    minWidth: '80%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '90%'
  }
}));

export const HomeDescContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'left',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    minWidth: '90%',
    marginTop: 100,
    marginBottom: 50
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%'
  },
  '@media(max-height: 519px)': {
    width: '100%'
  }
}));

export const HomeGraphics = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  img: {
    width: '420px',
    objectFit: 'contain',
    [theme.breakpoints.down('lg')]: {
      width: '280px'
    },
    [theme.breakpoints.down('md')]: {
      width: '300px',
      marginBottom: 40
    },
    '@media(max-width: 771px)': {
      width: '250px'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '@media(max-height: 635px) and (max-width: 899px)': {
      display: 'none'
    },
    '@media(max-height: 519px)': {
      display: 'none'
    }
  }
}));

export const HomeButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: 20,
  button: {
    marginRight: 10
  }
}));
