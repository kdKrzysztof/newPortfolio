import NavTopMenu from './NavTopMenu';
import { StyledHeader, StyledToolbar } from './Navbar.styles';
import useNavbar from './Navbar.utils';
import SideMenu from './SideMenu';

const Navbar = () => {
  const { changeBg, isBelowWidthBreakpoint } = useNavbar();
  return (
    <>
      <StyledHeader>
        <StyledToolbar changeBg={changeBg}>
          <NavTopMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
        </StyledToolbar>
      </StyledHeader>
      <SideMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
    </>
  );
};

export default Navbar;
