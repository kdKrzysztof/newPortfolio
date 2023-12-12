import type { Variant } from '@mui/material/styles/createTypography';
import { motion } from 'framer-motion';
import type { CSSProperties, Dispatch, SetStateAction } from 'react';

import useTextAnimationUp from './TextAnimationUp.utils';

interface ITextAnimateUp {
  text: string;
  textVariant?: Variant;
  color?: CSSProperties['color'];
  splitBy?: 'word' | 'letter' | undefined;
  staggerTime?: number;
  animationSpeed?: number | undefined;
  startAfter?: boolean | true;
  isCompleted?: Dispatch<SetStateAction<boolean>>;
}

/**
 * Staggered text animation component using Material-UI Typography and framer-motion.
 * Each **letter** transitions from an initial state of opacity 0 and y = -20 to a visible state
 * with opacity 1 and y = 0.
 * @param text Text to animate
 * @param textVariant Text variant
 * @param splitBy Text splitting type
 * @param staggerTime A delay to each word/letter animation
 * @param startAfter A boolean to check whenever text animation needs to wait for other animation to finish
 * @param animationSpeed Text animation speed, transition time
 * @param isCompleted Passed boolean useState to return true, whenever whole animation is finished
 */

const TextAnimateUp = ({
  text,
  textVariant,
  color,
  splitBy,
  staggerTime,
  startAfter = true,
  animationSpeed,
  isCompleted
}: ITextAnimateUp) => {
  const { wordAnimation, letterAnimation, textAnimation, controls } = useTextAnimationUp({
    text,
    color,
    textVariant,
    startAfter,
    animationSpeed
  });

  const onAnimationComplete = () => {
    isCompleted && isCompleted(true);
  };

  const textAnimationSelector = (splitBy: ITextAnimateUp['splitBy']) => {
    switch (splitBy) {
      case 'word':
        return wordAnimation();
      case 'letter':
        return letterAnimation();
      default:
        return textAnimation();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      transition={staggerTime ? { staggerChildren: staggerTime } : { staggerChildren: 0.1 }}
      onAnimationComplete={onAnimationComplete}>
      {textAnimationSelector(splitBy)}
    </motion.div>
  );
};

export default TextAnimateUp;
