import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Tooltip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks/reduxHooks';

import { toggleTheme } from 'store/reducers/themeSlice';

interface IChangeThemeButton {
  edge?: false | 'end' | 'start' | undefined;
  sx?: SxProps<Theme>;
}

const ChangeThemeButton = ({ edge, sx }: IChangeThemeButton) => {
  const themeColor = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <Tooltip title="Change theme">
      <IconButton onClick={() => dispatch(toggleTheme())} color="inherit" edge={edge} sx={sx}>
        {themeColor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ChangeThemeButton;
