import { styled } from '@mui/material';
import { motion } from 'framer-motion';

export const StyledSVG = styled(motion.svg)({
  width: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible',
  stroke: '#00ADB5',
  strokeWidth: 5,
  strokeLinejoin: 'round',
  strokeLinecap: 'round'
});
