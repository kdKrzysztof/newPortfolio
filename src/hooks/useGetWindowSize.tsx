import { useEffect, useState } from 'react'

const useGetWindowSize = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [windowHeight, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    };
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return {windowWidth, windowHeight}
}

export default useGetWindowSize