import '@mui/material';
import type { PaletteOptions, Theme, ThemeOptions } from '@mui/material/styles/';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    background: {
      aboutMe: React.CSSProperties['backgroundColor'];
      AppbarBackground?: React.CSSProperties['backgroundColor'];
      AppbarBackgroundTransparent?: React.CSSProperties['backgroundColor'];
      VantaBackgroundColor?: React.CSSProperties['backgroundColor'];
    };
    NavbarZindex?: number;
  }

  interface TypeBackground {
    aboutMe: React.CSSProperties['backgroundColor'];
    AppbarBackground?: React.CSSProperties['backgroundColor'];
    AppbarBackgroundTransparent?: React.CSSProperties['backgroundColor'];
    VantaBackgroundColor?: React.CSSProperties['backgroundColor'];
  }

  interface Palette {
    background: {
      AppbarBackground: React.CSSProperties['backgroundColor'];
      AppbarBackgroundTransparent: React.CSSProperties['backgroundColor'];
      VantaBackgroundColor: React.CSSProperties['backgroundColor'];
    };
    NavbarZindex: number;
  }

  interface Theme {
    NavbarZindex: number;
  }

  interface ThemeOptions {
    NavbarZindex: number;
  }

  interface Mixins {
    navbarButtonPadding: string;
  }

  interface TypographyVariants {
    navLinks: React.CSSProperties;
    homeMainTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    navLinks?: React.CSSProperties;
    homeMainTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navLinks: true;
  }
}
