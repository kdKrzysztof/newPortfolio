import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { Home } from 'pages';

import { useCustomTheme } from 'hooks';

import ChangeThemeButton from './components/ChangeThemeButton';

function App() {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChangeThemeButton />
      <Home />
    </ThemeProvider>
  );
}

export default App;
