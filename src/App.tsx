import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Suspense, lazy } from 'react';

import { AboutMe, Home, LoadingPage } from 'pages';

import { useCustomTheme } from 'hooks';

import { Navbar } from './components';
import { useAppSelector } from './hooks/reduxHooks';

const VantaBackground = lazy(() => import('components/VantaBackground'));

function App() {
  const theme = useCustomTheme();
  const isAnimationFinished = useAppSelector(
    (state) => state.loadingAnimationSlice.animationFinished
  );
  return (
    <ThemeProvider theme={theme}>
      <LoadingPage on={false} />
      <Suspense fallback={<></>}>
        <VantaBackground />
      </Suspense>
      <CssBaseline />
      {isAnimationFinished ? (
        <>
          <Navbar />
          <Home />
          <AboutMe/>
        </>
      ) : null}
    </ThemeProvider>
  );
}

export default App;
