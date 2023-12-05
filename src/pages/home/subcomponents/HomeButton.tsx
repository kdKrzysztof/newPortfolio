import { Button } from '@mui/material';
import type { ButtonOwnProps } from '@mui/material';
import { motion } from 'framer-motion';

import { defaultAnimation } from '../framer/animation';

interface IHomeButton {
  text: string;
  variant?: ButtonOwnProps['variant'];
}

const HomeButton = ({ text, variant }: IHomeButton) => {
  return (
    <Button
      variant={variant}
      component={motion.button}
      variants={defaultAnimation}
      transition={{ ease: 'easeIn', opacity: { duration: 0.3 } }}>
      {text}
    </Button>
  );
};

export default HomeButton;
