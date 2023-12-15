import { type SxProps, type Theme, Typography } from '@mui/material';
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
  sx?: SxProps<Theme>;
}

const useTextAnimationUp = ({
  text,
  textVariant,
  startAfter,
  animationSpeed,
  color,
  sx
}: ITextAnimateUp) => {
  const typography = (text: string, index?: string | number) => (
    <Typography
      sx={sx}
      variant={textVariant}
      component={motion.span}
      color={color}
      key={text + index}
      variants={defaultAnimation}
      transition={{ ease: 'easeOut', opacity: { duration: animationSpeed } }}>
      {text + `\u00A0`}
    </Typography>
  );

  const wordAnimation = () => text.split(' ').map((word, index) => typography(word, index));

  const letterAnimation = () =>
    text.split(' ').map((word, wordIndex) => {
      let wordWithSpace = word + `\u00A0`;
      return (
        <WordContainer id={word} key={word + wordIndex}>
          {wordWithSpace.split('').map((letter, letterIndex) => typography(letter, letterIndex))}
        </WordContainer>
      );
    });

  const textAnimation = () => typography(text);

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
