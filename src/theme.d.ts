import '@mui/material';
import type { PaletteOptions, Theme, ThemeOptions } from '@mui/material/styles/';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    typography: {
      navLinks: {
        fontSize: React.CSSProperties['fontSize'];
      };
    };
    NavbarZindex: number;
    AppbarBackground: React.CSSProperties['backgroundColor'];
    VantaBackgroundColor: React.CSSProperties['backgroundColor'];
  }

  interface Palette {
    typography?: {
      navLinks?: {
        fontSize?: React.CSSProperties['fontSize'];
      };
    };
    NavbarZindex?: number;
    AppbarBackground?: React.CSSProperties['backgroundColor'];
    VantaBackgroundColor?: React.CSSProperties['backgroundColor'];
  }
}
