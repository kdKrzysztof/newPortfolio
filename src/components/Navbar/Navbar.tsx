import { Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';

import NavSideMenu from './NavSideMenu';
import NavTopMenu from './NavTopMenu';
import { StyledAppbar } from './Navbar.styles';

const Navbar = () => {
  const widthBreakpoint = 795;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <StyledAppbar position="fixed" elevation={0}>
      <Toolbar sx={{ width: '80%' }}>
        {width <= widthBreakpoint ? <NavSideMenu /> : <NavTopMenu />}
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
