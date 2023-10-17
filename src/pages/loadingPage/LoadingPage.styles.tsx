import { styled } from '@mui/material';
import { motion } from 'framer-motion';

export const LoadingPageContainer = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  zIndex: '10',
  backgroundColor: theme.palette.background.default
}));
