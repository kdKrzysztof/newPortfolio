import type { Variants } from 'framer-motion';

export const AnimationSequence: Variants = {
  initial: {
    opacity: 1,
    pathLength: 0,
    strokeWidth: 0,
    scale: 1,
    fill: 'rgba(0, 0, 0, 0)'
  },
  drawOutline: {
    strokeWidth: 8,
    opacity: 1,
    pathLength: 1,
    scale: 1,
    // fill: 'rgba(0,173,181,0.1)'
  },
  shrinkToCenter: {
    scale: 0,
    pathLength: 1,
    opacity: 0
  }
};
