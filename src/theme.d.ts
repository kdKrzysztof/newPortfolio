import '@mui/material';
import type { PaletteOptions, Theme, ThemeOptions } from '@mui/material/styles/';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    NavbarZindex?: number;
    AppbarBackground?: React.CSSProperties['backgroundColor'];
    AppbarBackgroundTransparent?: React.CSSProperties['backgroundColor'];
    VantaBackgroundColor?: React.CSSProperties['backgroundColor'];
  }

  interface Palette {
    NavbarZindex: number;
    AppbarBackground: React.CSSProperties['backgroundColor'];
    AppbarBackgroundTransparent: React.CSSProperties['backgroundColor'];
    VantaBackgroundColor: React.CSSProperties['backgroundColor'];
  }

  interface Theme {
    NavbarZindex: number;
  }

  interface ThemeOptions {
    NavbarZindex: number;
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
