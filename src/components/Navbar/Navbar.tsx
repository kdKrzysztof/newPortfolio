import { Toolbar } from '@mui/material';

import { useGetWindowSize } from 'hooks';

import NavSideMenu from './NavSideMenu';
import NavTopMenu from './NavTopMenu';
import { StyledAppbar } from './Navbar.styles';

const Navbar = () => {
  const widthBreakpoint = 850;
  const { windowWidth } = useGetWindowSize();

  return (
    <StyledAppbar position="fixed" elevation={0}>
      <Toolbar sx={{ width: '80%' }}>
        {windowWidth <= widthBreakpoint ? <NavSideMenu /> : <NavTopMenu />}
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
