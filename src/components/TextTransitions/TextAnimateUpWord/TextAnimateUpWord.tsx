import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { motion } from 'framer-motion';

interface ITextAnimateUp {
  text: string;
  textVariant: Variant;
}

const defaultAnimation = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 20,
    display: 'inline-block'
  }
};

/**
 * Staggered text animation component using Material-UI Typography and framer-motion.
 * Each **word** transitions from an initial state of opacity 0 and y = -20 to a visible state
 * with opacity 1 and y = 0.
 */

const TextAnimateUpWord = ({ text, textVariant }: ITextAnimateUp) => {
  return (
    <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
      {text.split(' ').map((char, index) => (
        <>
          <Typography
            variant={textVariant}
            component={motion.span}
            key={char + index}
            variants={defaultAnimation}
            transition={{ ease: 'easeOut', opacity: { duration: 1 } }}>
            {char}&nbsp;
          </Typography>
        </>
      ))}
    </motion.div>
  );
};

export default TextAnimateUpWord;
