import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const sectionRef = useRef(null);

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
          shininess: 25.0,
          waveHeight: 4.0,
          waveSpeed: 1.0,
          zoom: 1.75,
          color: '#171c22'
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={sectionRef}
      style={{ position: 'absolute', width: '100vw', height: '100vh', opacity: '40%' }}></div>
  );
};

export default VantaBackground;
