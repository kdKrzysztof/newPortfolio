import { useEffect } from 'react';

import { LoadingLogo } from 'components';

import { useAppDispatch } from 'hooks/reduxHooks';

import { animationFinished } from 'store/reducers/loadingAnimationSlice';

import { LoadingPageContainer } from './LoadingPage.styles';
import useloadingPage from './LoadingPage.utils';
import { LoadingPageAnimationSequence } from './framerData/animationSequence';

interface LoadingPageProps {
  on: boolean;
}

const LoadingPage = ({ on }: LoadingPageProps) => {
  const { controls, hideComponent } = useloadingPage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!on) {
      dispatch(animationFinished());
    }
  }, [dispatch]); // dispatch is called when component is unmounted

  if (!hideComponent && on) {
    return (
      <LoadingPageContainer
        variants={LoadingPageAnimationSequence}
        initial="initial"
        animate={controls}
        transition={{ duration: 1 }}>
        <LoadingLogo />
      </LoadingPageContainer>
    );
  }

  return null;
};

export default LoadingPage;
