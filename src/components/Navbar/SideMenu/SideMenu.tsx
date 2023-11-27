import { Divider } from '@mui/material';
import { motion } from 'framer-motion';

import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';

import { closeNav } from 'store/reducers/navbarMenuSlice';

import { NavLinksSidebar } from '../NavLinks';
import OffsiteLinks from '../OffsiteLinks';
import OpenMenuButton from '../OpenMenuButton';
import {
  CloseButtonGrid,
  SideMenuBackgroundBlur,
  SideMenuBody,
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
      <SideMenuBackgroundBlur
        initial={'hide'}
        animate={menuState ? 'show' : 'hide'}
        variants={sidebarBackground}
        onClick={() => dispatch(closeNav())}
      />
      <motion.div initial={false} animate={menuState ? 'open' : 'closed'}>
        <SideMenuBody variants={sidebar}>
          <CloseButtonGrid>
            <OpenMenuButton icon="close" />
          </CloseButtonGrid>
          <SideMenuHeader>
            <ChangeLanguageButton />
            <ChangeThemeButton />
          </SideMenuHeader>
          <Divider sx={{ marginBottom: 2 }} />
          <SideMenuContent>
            <NavLinksSidebar />
            <OffsiteLinks />
          </SideMenuContent>
        </SideMenuBody>
      </motion.div>
    </>
  ) : null;
};

export default SideMenu;
