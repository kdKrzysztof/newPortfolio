import { Collapse, useTheme } from '@mui/material';

import { useAppSelector } from 'src/hooks/reduxHooks';

import { useGetWindowSize } from 'hooks';

import NavTopMenu from './NavTopMenu';
import { NavContentWrapper, StyledHeader, StyledToolbar } from './Navbar.styles';

const Navbar = () => {
  const theme = useTheme();
  const mdWidthBreakpoint = theme.breakpoints.values.md - 1;
  const { windowWidth } = useGetWindowSize();
  const isBelowWidthBreakpoint = windowWidth <= mdWidthBreakpoint;
  const openMenu = useAppSelector((state) => state.navbarMenuSlice.showNav);

  return (
    <StyledHeader>
      <Collapse
        in={openMenu}
        orientation="vertical"
        collapsedSize={theme.mixins.toolbar.minHeight}
        sx={{
          width: '100%'
        }}>
        <NavContentWrapper>
          <StyledToolbar>
            <NavTopMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
          </StyledToolbar>
        </NavContentWrapper>
      </Collapse>
    </StyledHeader>
  );
};

export default Navbar;
