import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

import { useAppDispatch } from 'hooks/reduxHooks';

import { closeNav, openNav } from 'store/reducers/navbarMenuSlice';

interface OpenMenuButton {
  icon?: 'close' | 'open' | undefined;
}

const OpenMenuButton = ({ icon }: OpenMenuButton) => {
  const dispatch = useAppDispatch();

  const clickMenuButton = () => {
    icon === 'open' ? dispatch(openNav()) : dispatch(closeNav());
  };

  return (
    <IconButton onClick={clickMenuButton}>
      {icon === 'open' ? <MenuRoundedIcon /> : <CloseIcon />}
    </IconButton>
  );
};

export default OpenMenuButton;
