import { Box, Collapse, useTheme } from '@mui/material';

import { useGetWindowSize } from 'hooks';

import NavTopMenu from './NavTopMenu';
import { StyledHeader, StyledToolbar } from './Navbar.styles';

const Navbar = () => {
  const theme = useTheme();
  const mdWidthBreakpoint = theme.breakpoints.values.md - 1;
  const { windowWidth } = useGetWindowSize();
  const isBelowWidthBreakpoint = windowWidth <= mdWidthBreakpoint;

  return (
    <StyledHeader>
      <Collapse
        in={true}
        orientation="vertical"
        collapsedSize={theme.mixins.toolbar.minHeight}
        sx={{
          width: '100%'
        }}>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <StyledToolbar>
            <NavTopMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
          </StyledToolbar>
        </Box>
      </Collapse>
    </StyledHeader>
  );
};

export default Navbar;
