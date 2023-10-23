import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { Home} from 'pages';

import { useCustomTheme } from 'hooks';

import { Navbar } from './components';

function App() {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      {/* <LoadingPage /> */}
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
