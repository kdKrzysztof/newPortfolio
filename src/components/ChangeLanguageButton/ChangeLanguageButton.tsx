import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Menu, Tooltip } from '@mui/material';
import type { PopoverOrigin, SxProps, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import useChangeLanguageButton from './ChangeLanguageButton.utils';
import LanguageItem from './LanguageItem/LanguageItem';

interface IChangeLanguageButton {
  edge?: false | 'end' | 'start' | undefined;
  sx?: SxProps<Theme>;
}

const ChangeLanguageButton = ({ edge, sx }: IChangeLanguageButton) => {
  const { anchorEl, handleClose, handleMenu } = useChangeLanguageButton();

  const { t } = useTranslation();

  const menuAnchorOrigin: PopoverOrigin  = {
    vertical: 'bottom',
    horizontal: 'right'
  }

  const menuTransformOrigin: PopoverOrigin  = {
    vertical: 'top',
    horizontal: 'right'
  }

  return (
    <>
      <Tooltip title="Change language">
        <IconButton color="inherit" onClick={handleMenu} edge={edge} sx={sx}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={menuAnchorOrigin}
        transformOrigin={menuTransformOrigin}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <LanguageItem onClick={handleClose} id="pl">
          {t('LangPL')}
        </LanguageItem>
        <LanguageItem onClick={handleClose} id="en">
          {t('LangEN')}
        </LanguageItem>
      </Menu>
    </>
  );
};

export default ChangeLanguageButton;
