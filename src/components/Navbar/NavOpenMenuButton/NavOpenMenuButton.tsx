import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

import { useAppDispatch } from 'hooks/reduxHooks';

import { slideNav } from 'store/reducers/navbarMenuSlice';

const NavOpenMenuButton = () => {
  const dispatch = useAppDispatch();

  const clickMenuButton = () => {
    dispatch(slideNav());
  };

  return (
    <IconButton onClick={clickMenuButton}>
      <MenuRoundedIcon />
    </IconButton>
  );
};

export default NavOpenMenuButton;
