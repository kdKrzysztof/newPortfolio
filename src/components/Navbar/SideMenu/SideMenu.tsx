import { Divider, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { useAppSelector } from 'src/hooks/reduxHooks';

import NavLinks from '../NavLinks/NavLinks';
import OpenMenuButton from '../OpenMenuButton';
import { SideMenuBody, SideMenuHeader } from './SideMenu.styles';
import { sidebar } from './framerData/sideMenuAnimationSequence';

const SideMenu = () => {
  const openMenu = useAppSelector((state) => state.navbarMenuSlice.showNav);
  return (
    <motion.nav initial={false} animate={openMenu ? 'open' : 'closed'}>
      <SideMenuBody variants={sidebar}>
        <SideMenuHeader>
          <Typography variant="h5">Menu</Typography>
          <OpenMenuButton icon="close" />
        </SideMenuHeader>
        <Divider sx={{ marginBottom: 2 }} />
        <NavLinks />
      </SideMenuBody>
    </motion.nav>
  );
};

export default SideMenu;
