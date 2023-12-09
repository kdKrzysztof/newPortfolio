import type { ThemeOptions } from '@mui/material';

const globalStyleProps: ThemeOptions = {
  typography: {
    navLinks: {
      fontSize: '1.2rem'
    }
  },
  mixins: {
    toolbar: {
      minHeight: '64px'
    }
  },
  NavbarZindex: 98
} as ThemeOptions;

export default globalStyleProps;
