import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const SideMenuBody = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  position: 'fixed',
  flexDirection: 'column',
  height: '100vh',
  background: theme.palette.background.VantaBackgroundColor,
  zIndex: 4,
  [theme.breakpoints.down('md')]: {
    width: '300px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100vw'
  }
}));

export const SideMenuBackgroundBlur = styled(motion.div)({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)'
});

export const SideMenuHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: theme.mixins.toolbar.minHeight
}));

export const SideMenuButtonsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: theme.mixins.navbarButtonPadding,
  marginLeft: '5vw', // I have found no other solution to align close button to open menu button, while being separate buttons
  paddingRight: '10vw',
  height: theme.mixins.toolbar.minHeight
}));

export const SideMenuContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1
});

export const SideMenuContainer = styled(motion.div)({
  position: 'absolute'
});
