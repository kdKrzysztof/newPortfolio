import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks/reduxHooks';

import { animationOff, animationOn } from 'store/reducers/isLoadingAnimSlice';

import delayCode from 'utils/delayCode';

const useLoadingControls = () => {
  const [SpeedUp, setSpeedup] = useState(true);
  const controls = useAnimation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const animate = async () => {
      controls.set('initial');
      setSpeedup(false);
      dispatch(animationOn());
      await controls.start('drawOutline');
      setSpeedup(true);
      await controls.start('shrinkToCenter');
      dispatch(animationOff());
      delayCode(100);
      animate();
    };
    animate();
  }, [controls]);

  return { controls, SpeedUp };
};

export default useLoadingControls;
