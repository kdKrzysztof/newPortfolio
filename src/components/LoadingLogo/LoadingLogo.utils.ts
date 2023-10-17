import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks/reduxHooks';

import { animationFinished } from 'store/reducers/isLoadingAnimSlice';

import delayCode from 'utils/delayCode';

const useLoadingControls = () => {
  const [SpeedUp, setSpeedup] = useState(true);
  const controls = useAnimation();
  const dispatch = useAppDispatch();

  const animate = async () => {
    controls.set('initial');

    setSpeedup(false);
    await controls.start('drawOutline');

    setSpeedup(true);
    await controls.start('shrinkStroke');

    dispatch(animationFinished());
    await delayCode(100);

    // animate(); // recursive loading functions
  };

  useEffect(() => {
    animate();
  }, [controls, dispatch]);

  return { controls, SpeedUp };
};

export default useLoadingControls;
