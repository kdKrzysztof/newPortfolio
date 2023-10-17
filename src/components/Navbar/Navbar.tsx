import { AppBar } from '@mui/material';

import ChangeThemeButton from '../ChangeThemeButton';
import { StyledAppbar, StyledToolbar } from './Navbar.styles';

const Navbar = () => {
  return (
    <StyledAppbar position="fixed" elevation={0}>
      <StyledToolbar>
        <ChangeThemeButton />
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default Navbar;
