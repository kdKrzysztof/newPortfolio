import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { Home } from 'pages';

import { VantaBackground } from 'components';

import { useCustomTheme } from 'hooks';

function App() {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VantaBackground />
      <Home />
    </ThemeProvider>
  );
}

export default App;
