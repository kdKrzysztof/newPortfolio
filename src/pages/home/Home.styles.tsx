import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const HomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  position: 'relative',
  width: '100vw',
  height: '100vh',
  minHeight: '400px',
  backgroundColor: 'transparent',
  overflowX: 'hidden'
});

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
    minWidth: '80%'
  }
}));

export const HomeDescContainer = styled(motion.div)(({ theme }) => ({
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
  },
  zIndex: 2
}));

export const HomeGraphics = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  img: {
    width: '20svw',
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
    [theme.breakpoints.down('md')]: {
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

export const HomeButtonContainer = styled(motion.div)({
  width: '100%',
  marginTop: 20,
  button: {
    marginRight: 10
  },
  '@media (max-width:450px)': {
    '& button': {
      marginBottom: 5,
      width: '100%'
    }
  }
});
