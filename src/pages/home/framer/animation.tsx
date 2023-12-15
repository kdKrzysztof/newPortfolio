import type { Variants } from 'framer-motion';

export const defaultAnimation: Variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};

export const imageAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 0
  },
  default: {
    y: 20,
    opacity: 1,
    transition: {
      duration: 3,
      repeatType: 'mirror',
      repeat: Infinity,
      ease: 'easeInOut',
      opacity: {
        duration: 1,
        repeat: 0
      }
    }
  }
};
