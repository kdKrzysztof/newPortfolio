import { LoadingLogo } from 'components';

import { LoadingPageContainer } from './LoadingPage.styles';
import useloadingPage from './LoadingPage.utils';
import { LoadingPageAnimationSequence } from './framerData/animationSequence';

const LoadingPage = () => {
  const { controls, hideComponent } = useloadingPage();
  return !hideComponent ? (
    <LoadingPageContainer
      variants={LoadingPageAnimationSequence}
      initial="initial"
      animate={controls}
      transition={{ duration: 1 }}>
      <LoadingLogo />
    </LoadingPageContainer>
  ) : null;
};

export default LoadingPage;
