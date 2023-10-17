import { AppBar, Toolbar, styled } from '@mui/material';

import type CustomPaletteOptions from 'data/ThemeProperties/CustomPalette.interface';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({}));

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  background: (theme.palette as CustomPaletteOptions).AppbarBackground,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: (theme.palette as CustomPaletteOptions).NavbarZindex
}));
