import type { Palette } from '@mui/material';

export default interface CustomPaletteOptions extends Palette {
  VantaBackgroundColor: string;
  AppbarBackground: string;
  NavbarZindex: number;
}
