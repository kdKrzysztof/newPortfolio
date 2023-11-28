import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { Home, LoadingPage } from 'pages';

import { useCustomTheme } from 'hooks';

import { animationFinished } from 'store/reducers/loadingAnimationSlice';

import { Navbar } from './components';
import { useAppSelector } from './hooks/reduxHooks';

function App() {
  const theme = useCustomTheme();
  const isAnimationFinished = useAppSelector(
    (state) => state.loadingAnimationSlice.animationFinished
  );
  return (
    <ThemeProvider theme={theme}>
      <LoadingPage on={true} />
      <CssBaseline />
      {isAnimationFinished ? (
        <>
          <Navbar />
          <Home />
        </>
      ) : null}
    </ThemeProvider>
  );
}

export default App;
