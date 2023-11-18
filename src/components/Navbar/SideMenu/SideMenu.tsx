import { motion } from 'framer-motion';

import { useAppSelector } from 'src/hooks/reduxHooks';

import { dark } from 'data/ThemeProperties';

import { SideMenuBody } from './SideMenu.styles';
import { sidebar } from './framerData/sideMenuAnimationSequence';

const SideMenu = () => {
  const openMenu = useAppSelector((state) => state.navbarMenuSlice.showNav);
  return (
    <motion.nav initial={false} animate={openMenu ? 'open' : 'closed'}>
      <SideMenuBody variants={sidebar} />
    </motion.nav>
  );
};

export default SideMenu;
