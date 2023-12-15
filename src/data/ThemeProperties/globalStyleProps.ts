import '@fontsource/poppins/400.css';
import type { ThemeOptions } from '@mui/material';

const globalStyleProps: ThemeOptions = {
  typography: {
    navLinks: {
      fontSize: '1.2rem',
      fontFamily: 'poppins'
    },
    homeMainTitle: {
      fontWeight: 700
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
