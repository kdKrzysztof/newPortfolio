import { LoadingLogo } from 'components';

import { LoadingPageContainer } from './LoadingPage.styles';
import useloadingPage from './LoadingPage.utils';
import { LoadingPageAnimationSequence } from './framerData/animationSequence';

interface LoadingPageProps {
  on: boolean;
}

const LoadingPage = ({ on }: LoadingPageProps) => {
  const { controls, hideComponent } = useloadingPage();
  return !hideComponent ? (
    on ? (
      <LoadingPageContainer
        variants={LoadingPageAnimationSequence}
        initial="initial"
        animate={controls}
        transition={{ duration: 1 }}>
        <LoadingLogo />
      </LoadingPageContainer>
    ) : null
  ) : null;
};

export default LoadingPage;
