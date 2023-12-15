import type { Variants } from 'framer-motion';

export const defaultAnimation: Variants = {
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
