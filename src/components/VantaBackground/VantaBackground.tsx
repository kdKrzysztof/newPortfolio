import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

import CustomPaletteOptions from 'src/data/ThemeProperties/CustomPalette.interface';

import { useAppSelector } from 'hooks/reduxHooks';

import { dark, light } from 'data/ThemeProperties';

import { StyledBox } from './VantaBackground.styles';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const sectionRef = useRef(null);
  const themeColor = useAppSelector((state) => state.theme);

  const darkTheme = dark as CustomPaletteOptions;
  const lightTheme = light as CustomPaletteOptions;

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
            themeColor === 'dark' ? darkTheme.VantaBackgroundColor : lightTheme.VantaBackgroundColor
        })
      );
    }

    if (vantaEffect) {
      vantaEffect.setOptions({
        color:
          themeColor === 'dark' ? darkTheme.VantaBackgroundColor : lightTheme.VantaBackgroundColor
      });
    }
  }, [themeColor]);

  return <StyledBox ref={sectionRef} />;
};

export default VantaBackground;
