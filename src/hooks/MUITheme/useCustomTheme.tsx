import { PaletteMode, createTheme, responsiveFontSizes } from '@mui/material';
import { dark, light } from '@mui/material/styles/createPalette';
import { useEffect, useMemo } from 'react';

import { useAppSelector } from 'hooks/reduxHooks';

const useCreateTheme = (themeColorState: PaletteMode) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeColorState,
          ...(themeColorState === 'light' ? light : dark)
        }
      }),
    [themeColorState]
  );

  return responsiveFontSizes(theme);
};

const useTheme = () => {
  const themeColor = useAppSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
  }, [themeColor]);

  const theme = useCreateTheme(themeColor);

  return theme;
};

export default useTheme;
