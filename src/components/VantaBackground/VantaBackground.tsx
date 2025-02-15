import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

import { useAppSelector } from 'hooks/reduxHooks';

import { dark, light } from 'data/ThemeProperties';

import { StyledBox } from './VantaBackground.styles';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const sectionRef = useRef(null);
  const themeColor = useAppSelector((state) => state.theme);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          THREE: THREE,
          el: sectionRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          scaleMobile: 3.0,
          shininess: 5,
          waveHeight: 6.0,
          waveSpeed: 0.5,
          color:
            themeColor === 'dark'
              ? dark.background && dark.background.VantaBackgroundColor
              : light.background && light.background.VantaBackgroundColor
        })
      );
    }

    if (vantaEffect) {
      vantaEffect.setOptions({
        color:
          themeColor === 'dark'
            ? dark.background && dark.background.VantaBackgroundColor
            : light.background && light.background.VantaBackgroundColor
      });
    }
  }, [themeColor]);

  return <StyledBox ref={sectionRef} />;
};

export default VantaBackground;
