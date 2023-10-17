import type { Variants } from 'framer-motion';

export const LoadingLogoAnimationSequence: Variants = {
  initial: {
    opacity: 1,
    pathLength: 0,
    strokeWidth: 0,
    scale: 1,
    rotate: 0,
    fill: 'rgba(0, 0, 0, 0)'
  },
  drawOutline: {
    strokeWidth: 5,
    opacity: 1,
    pathLength: 1,
    scale: 1
  },
  shrinkStroke: {
    strokeWidth: 0
  },
  shrinkToCenterRotate: {
    scale: 0.3,
    pathLength: 1,
    opacity: 0,
    strokeWidth: 0,
    rotate: -360
  }
};
