import { useEffect } from 'react';

import { useAppSelector } from 'src/hooks/reduxHooks';

import { LoadingLogo } from 'components';

import { LoadingPageContainer } from './LoadingPage.styles';

const LoadingPage = () => {
  const isAnimationRunning = useAppSelector((state) => state.isLoadingAnimationRunning);

  useEffect(() => {
    if (isAnimationRunning) {
      console.log('running');
      return;
    }
    console.log('not running');
  }, [isAnimationRunning]);

  return (
    <LoadingPageContainer>
      <LoadingLogo />
    </LoadingPageContainer>
  );
};

export default LoadingPage;
