import '@mui/material';
import type { PaletteOptions, Theme, ThemeOptions } from '@mui/material/styles/';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    NavbarZindex: number;
  }

  interface TypeBackground {
    aboutMe: React.CSSProperties['backgroundColor'];
    AppbarBackground?: React.CSSProperties['backgroundColor'];
    AppbarBackgroundTransparent?: React.CSSProperties['backgroundColor'];
    VantaBackgroundColor?: React.CSSProperties['backgroundColor'];
    ProjectsBackgroundColor?: React.CSSProperties['backgroundColor'];
  }

  interface ThemeOptions extends Pick<PaletteOptions, 'NavbarZindex'> {}
  interface Theme extends Pick<PaletteOptions, 'NavbarZindex'> {}

  interface Mixins {
    navbarButtonPadding: string;
  }

  interface TypographyVariants {
    navLinks: React.CSSProperties;
    homeMainTitle: React.CSSProperties;
  }
}
