import { Typography } from '@mui/material';
import type { Variant } from '@mui/material/styles/createTypography';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import type { CSSProperties } from 'react';

import { WordContainer } from './TextAnimateUp.styles';
import { defaultAnimation } from './framer/animations';

interface ITextAnimateUp {
  text: string;
  textVariant?: Variant;
  color: CSSProperties['color'];
  startAfter?: boolean;
  animationSpeed: number | undefined;
}

const useTextAnimationUp = ({
  text,
  textVariant,
  startAfter,
  animationSpeed,
  color
}: ITextAnimateUp) => {
  const wordAnimation = () =>
    text.split(' ').map((word, index) => (
      <Typography
        variant={textVariant}
        component={motion.span}
        color={color}
        key={word + index}
        variants={defaultAnimation}
        transition={{ ease: 'easeOut', opacity: { duration: animationSpeed } }}>
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
              color={color}
              component={motion.span}
              key={letter + letterIndex + word}
              variants={defaultAnimation}
              transition={{ ease: 'easeOut', opacity: { duration: animationSpeed } }}>
              {letter}
            </Typography>
          ))}
        </WordContainer>
      );
    });

  const textAnimation = () => (
    <Typography
      variant={textVariant}
      color={color}
      component={motion.span}
      key={text}
      variants={defaultAnimation}
      transition={{ ease: 'easeOut', opacity: { duration: animationSpeed } }}>
      {text}
    </Typography>
  );

  const controls = useAnimation();

  const animate = async () => {
    controls.set('hidden');
    startAfter && controls.start('visible');
  };

  useEffect(() => {
    animate();
  }, [controls, startAfter]);

  return { wordAnimation, letterAnimation, textAnimation, controls };
};

export default useTextAnimationUp;
