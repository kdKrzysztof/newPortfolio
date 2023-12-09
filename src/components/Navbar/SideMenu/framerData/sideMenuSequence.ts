import { globalStyleProps } from 'data/ThemeProperties';

export const sidebar = {
  open: {
    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    },
    zIndex: globalStyleProps.NavbarZindex + 1
  },
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    },
    zIndex: globalStyleProps.NavbarZindex + 1
  }
};
