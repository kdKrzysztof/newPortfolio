import { useTheme } from '@mui/material';

import { useGetWindowSize } from 'hooks';

import NavTopMenu from './NavTopMenu';
import { StyledHeader, StyledToolbar } from './Navbar.styles';
import SideMenu from './SideMenu';

const Navbar = () => {
  const theme = useTheme();
  const mdWidthBreakpoint = theme.breakpoints.values.md - 1;
  const { windowWidth } = useGetWindowSize();
  const isBelowWidthBreakpoint = windowWidth <= mdWidthBreakpoint;

  return (
    <>
      <StyledHeader>
        <StyledToolbar>
          <NavTopMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
        </StyledToolbar>
      </StyledHeader>
      <SideMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
    </>
  );
};

export default Navbar;
