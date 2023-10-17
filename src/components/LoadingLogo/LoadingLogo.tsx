import { motion } from 'framer-motion';

import { StyledSVG } from './LoadingLogo.styles';
import useLoadingControls from './LoadingLogo.utils';
import { LoadingLogoAnimationSequence } from './framerData/animationSequence';

const LoadingIcon = () => {
  const { controls, SpeedUp } = useLoadingControls();
  const normalDuration = 3;
  const fasterDuriation = 0.8;
  return (
    <StyledSVG viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M292.506 400.5L132 219l.011-.01-.008-.006L292.261 2h-63.76l-162.7 217.599L65 219V1H1v399h64v-90.994l-.001-.001.001-.002V309h.002l38.955-53.237.801.586.003.002.003.002L228.461 400.5h64.045z"
        fill="#000"
        variants={LoadingLogoAnimationSequence}
        initial="initial"
        animate={controls}
        transition={{
          default: SpeedUp
            ? { duration: normalDuration, ease: 'easeInOut' }
            : { duration: fasterDuriation, ease: 'easeInOut' }
        }}
      />
    </StyledSVG>
  );
};

export default LoadingIcon;
