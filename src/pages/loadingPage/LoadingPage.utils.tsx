import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useAppSelector } from 'src/hooks/reduxHooks';

const useloadingPage = () => {
  const isAnimationFinished = useAppSelector(
    (state) => state.isLoadingAnimationRunning.animationFinished
  );

  const [hideComponent, setHideComponent] = useState(false)
  const controls = useAnimation();

  const animate = async () => {
    if (isAnimationFinished) {
      await controls.start('HideComponent');
      setHideComponent(true)
    }
  };

  useEffect(() => {
    animate();
  }, [controls, isAnimationFinished]);

  return {controls, hideComponent};
};

export default useloadingPage;
