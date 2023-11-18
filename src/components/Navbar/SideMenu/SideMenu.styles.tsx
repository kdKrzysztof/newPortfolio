import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const SideMenuWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
});

export const SideMenuBody = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  background: theme.palette.VantaBackgroundColor,
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    width: '300px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100vw'
  }
}));
