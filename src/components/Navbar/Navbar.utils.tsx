import { useTheme } from '@mui/material';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

import { useGetWindowSize } from 'src/hooks';

const useNavbar = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const [changeBg, setChangeBg] = useState(false);
  const scrollHeightBreakpoint = 200;

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (y >= scrollHeightBreakpoint) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  });

  const mdWidthBreakpoint = theme.breakpoints.values.md - 1;
  const { windowWidth } = useGetWindowSize();
  const isBelowWidthBreakpoint = windowWidth <= mdWidthBreakpoint;

  return { changeBg, isBelowWidthBreakpoint };
};

export default useNavbar;
