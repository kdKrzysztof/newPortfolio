import { Divider, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';

import { closeNav } from 'store/reducers/navbarMenuSlice';

import { NavLinksSidebar } from '../NavLinks';
import OpenMenuButton from '../OpenMenuButton';
import {
  CloseButtonGrid,
  SideMenuBackgroundBlur,
  SideMenuBody,
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
      <motion.nav initial={false} animate={menuState ? 'open' : 'closed'}>
        <SideMenuBody variants={sidebar}>
          <CloseButtonGrid container>
            <Grid item xs={2}>
              <OpenMenuButton icon="close" />
            </Grid>
            <Grid item xs />
          </CloseButtonGrid>
          <SideMenuHeader>
            <ChangeLanguageButton />
            <ChangeThemeButton />
          </SideMenuHeader>
          <Divider sx={{ marginBottom: 3 }} />
          <NavLinksSidebar />
        </SideMenuBody>
      </motion.nav>
    </>
  ) : null;
};

export default SideMenu;

{
  /* <Typography variant="h5">Menu</Typography>
<OpenMenuButton icon="close" /> */
}
