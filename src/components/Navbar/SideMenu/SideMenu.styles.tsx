import { Box, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const SideMenuBody = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  background: theme.palette.VantaBackgroundColor,
  zIndex: 4,
  [theme.breakpoints.down('md')]: {
    width: '300px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100vw'
  }
}));

export const SideMenuBackgroundBlur = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  background: theme.palette.AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)'
}));

export const SideMenuHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: theme.mixins.toolbar.minHeight
}));

export const CloseButtonGrid = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90vw',
  marginLeft: '5vw',
  height: theme.mixins.toolbar.minHeight
}));
