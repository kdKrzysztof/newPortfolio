import { useTheme } from '@mui/material';

import { useGetWindowSize } from 'hooks';

import NavTopMenu from './NavTopMenu';
import { StyledAppbar, StyledToolbar } from './Navbar.styles';

const Navbar = () => {
  const theme = useTheme();
  const mdWidthBreakpoint = theme.breakpoints.values.md;
  const { windowWidth } = useGetWindowSize();
  const isBelowWidthBreakpoint = windowWidth <= mdWidthBreakpoint;

  return (
    <StyledAppbar position="fixed" elevation={0}>
      <StyledToolbar
        variant={isBelowWidthBreakpoint ? 'dense' : 'regular'}>
        <NavTopMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default Navbar;
