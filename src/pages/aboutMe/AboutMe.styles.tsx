import { styled } from '@mui/material';
import { motion } from 'framer-motion';

export const AboutMeContainer = styled(motion.section)(({ theme }) => ({
  width: '100svw',
  height: '50svw',
  backgroundColor: theme.palette.background.aboutMe
}));
