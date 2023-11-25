import { styled } from '@mui/material';
import { motion } from 'framer-motion';

export const StyledSVG = styled(motion.svg)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '250px',
  overflow: 'visible',
  stroke: '#00ADB5',
  strokeWidth: 5,
  strokeLinejoin: 'round',
  strokeLinecap: 'round'
});
