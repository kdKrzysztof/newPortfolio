import { globalStyleProps } from 'data/ThemeProperties';

export const sidebarBackground = {
  show: {
    opacity: 1,
    zIndex: globalStyleProps.NavbarZindex + 1
  },
  hide: {
    opacity: 0,
    zIndex: 1
  }
};
