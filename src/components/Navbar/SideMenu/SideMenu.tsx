import { motion} from 'framer-motion';

import { useAppSelector } from 'src/hooks/reduxHooks';


const sidebar = {
  open: () => ({
    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const SideMenu = () => {
  const openMenu = useAppSelector((state) => state.navbarMenuSlice.showNav);
  return (
    <motion.nav initial={false} animate={openMenu ? 'open' : 'closed'}>
      <motion.div
        variants={sidebar}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '300px',
          background: 'black',
          zIndex: 1
        }}
      />
    </motion.nav>
  );
};

export default SideMenu;
