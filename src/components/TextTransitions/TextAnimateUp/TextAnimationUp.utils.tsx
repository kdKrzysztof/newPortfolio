import { Typography } from '@mui/material';
import type { Variant } from '@mui/material/styles/createTypography';
import { motion } from 'framer-motion';

import { WordContainer } from './TextAnimateUp.styles';
import { defaultAnimation } from './framer/animations';

interface ITextAnimateUp {
  text: string;
  textVariant?: Variant;
}

const useTextAnimationUp = ({ text, textVariant }: ITextAnimateUp) => {
  const wordAnimation = () =>
    text.split(' ').map((word, index) => (
      <Typography
        variant={textVariant}
        component={motion.span}
        key={word + index}
        variants={defaultAnimation}
        transition={{ ease: 'easeOut', opacity: { duration: 1 } }}>
        {word + `\u00A0`}
      </Typography>
    ));

  const letterAnimation = () =>
    text.split(' ').map((word, wordIndex) => {
      let wordWithSpace = word + `\u00A0`;
      return (
        <WordContainer id={word} key={word + wordIndex}>
          {wordWithSpace.split('').map((letter, letterIndex) => (
            <Typography
              variant={textVariant}
              component={motion.span}
              key={letter + letterIndex + word}
              variants={defaultAnimation}
              transition={{ ease: 'easeOut', opacity: { duration: 0.1 } }}>
              {letter}
            </Typography>
          ))}
        </WordContainer>
      );
    });

  return { wordAnimation, letterAnimation };
};

export default useTextAnimationUp;
