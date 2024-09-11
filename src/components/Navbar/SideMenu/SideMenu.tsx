import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';

import { closeNav } from 'store/reducers/navbarMenuSlice';

import { NavLinksSidebar } from '../NavLinks';
import OffsiteLinks from '../OffsiteLinks';
import OpenMenuButton from '../OpenMenuButton';
import {
  SideMenuBackgroundBlur,
  SideMenuBody,
  SideMenuButtonsContainer,
  SideMenuContainer,
  SideMenuContent,
  SideMenuHeader
} from './SideMenu.styles';
import { sidebar, sidebarBackground } from './framerData';

interface ISideMenu {
  isBelowWidthBreakpoint: boolean;
}

const SideMenu = ({ isBelowWidthBreakpoint }: ISideMenu) => {
  const menuState = useAppSelector((state) => state.navbarMenuSlice.showNav);
  const dispatch = useAppDispatch();

  return isBelowWidthBreakpoint ? (
    <>
      <SideMenuContainer initial={false} animate={menuState ? 'open' : 'closed'}>
        <SideMenuBackgroundBlur
          initial={'hide'}
          animate={menuState ? 'show' : 'hide'}
          variants={sidebarBackground}
          onClick={() => dispatch(closeNav())}
        />
        <SideMenuBody variants={sidebar}>
          <SideMenuButtonsContainer>
            <OpenMenuButton icon="close" />
            <SideMenuHeader>
              <ChangeLanguageButton />
              <ChangeThemeButton />
            </SideMenuHeader>
          </SideMenuButtonsContainer>
          <SideMenuHeader />
          <SideMenuContent>
            <NavLinksSidebar />
            <OffsiteLinks />
          </SideMenuContent>
        </SideMenuBody>
      </SideMenuContainer>
    </>
  ) : null;
};

export default SideMenu;
