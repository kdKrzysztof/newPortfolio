import NavTopMenu from './NavTopMenu';
import { StyledHeader, StyledToolbar } from './Navbar.styles';
import useNavbar from './Navbar.utils';
import SideMenu from './SideMenu';

const Navbar = () => {
  const { changeBg, isBelowWidthBreakpoint } = useNavbar();
  return (
    <>
      <StyledHeader changeBg={changeBg}>
        <StyledToolbar>
          <NavTopMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
        </StyledToolbar>
      </StyledHeader>
      <SideMenu isBelowWidthBreakpoint={isBelowWidthBreakpoint} />
    </>
  );
};

export default Navbar;
