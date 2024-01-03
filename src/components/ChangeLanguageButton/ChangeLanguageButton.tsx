import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Menu, Tooltip } from '@mui/material';
import type { PopoverOrigin } from '@mui/material';
import { useTranslation } from 'react-i18next';

import useChangeLanguageButton from './ChangeLanguageButton.utils';
import { LanguageItem } from './Subcomponents';

const ChangeLanguageButton = () => {
  const { anchorEl, closeMenu, openMenu } = useChangeLanguageButton();
  const { t } = useTranslation();

  const menuAnchorOrigin: PopoverOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
  };

  const menuTransformOrigin: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'right'
  };

  return (
    <>
      <Tooltip title="Change language">
        <IconButton color="inherit" onClick={openMenu}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={menuAnchorOrigin}
        transformOrigin={menuTransformOrigin}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        disableScrollLock={true}>
        <LanguageItem onClick={closeMenu} id="pl">
          {t('LangPL')}
        </LanguageItem>
        <LanguageItem onClick={closeMenu} id="en">
          {t('LangEN')}
        </LanguageItem>
      </Menu>
    </>
  );
};

export default ChangeLanguageButton;
