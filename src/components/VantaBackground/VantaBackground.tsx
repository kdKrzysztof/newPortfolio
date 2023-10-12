import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

import { useAppSelector } from 'hooks/reduxHooks';

import { dark, light } from 'data/ThemeProperties';

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
          scale: 1.0,
          scaleMobile: 2.0,
          shininess: 0,
          waveHeight: 4.0,
          waveSpeed: 1.0,
          color: themeColor === 'dark' ? dark.VantaBackgroundColor : light.VantaBackgroundColor
        })
      );
    }

    if (vantaEffect) {
      vantaEffect.setOptions({
        color: themeColor === 'dark' ? dark.VantaBackgroundColor : light.VantaBackgroundColor
      });
    }
  }, [themeColor]);

  return (
    <div ref={sectionRef} style={{ position: 'absolute', width: '100vw', height: '100vh' }}></div>
  );
};

export default VantaBackground;
