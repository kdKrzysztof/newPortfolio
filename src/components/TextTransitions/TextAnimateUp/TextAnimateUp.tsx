import { Variant } from '@mui/material/styles/createTypography';
import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';

import useTextAnimationUp from './TextAnimationUp.utils';

interface ITextAnimateUp {
  text: string;
  textVariant?: Variant;
  splitBy: 'word' | 'letter';
  staggerTime?: number;
  isCompleted: Dispatch<SetStateAction<boolean>>;
}

/**
 * Staggered text animation component using Material-UI Typography and framer-motion.
 * Each **letter** transitions from an initial state of opacity 0 and y = -20 to a visible state
 * with opacity 1 and y = 0.
 */

const TextAnimateUp = ({
  text,
  textVariant,
  splitBy,
  staggerTime,
  isCompleted
}: ITextAnimateUp) => {
  const { wordAnimation, letterAnimation } = useTextAnimationUp({ text, textVariant });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={staggerTime ? { staggerChildren: staggerTime } : { staggerChildren: 0.1 }}
      onAnimationComplete={() => {
        isCompleted(true);
      }}>
      {splitBy === 'word' ? wordAnimation() : letterAnimation()}
    </motion.div>
  );
};

export default TextAnimateUp;
