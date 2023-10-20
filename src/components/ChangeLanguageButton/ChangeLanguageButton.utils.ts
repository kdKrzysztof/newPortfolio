import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const useChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    const id = event?.currentTarget?.id;

    if (id) {
      i18n.changeLanguage(event.currentTarget.id);
    }

    setAnchorEl(null);
  };

  return { handleMenu, handleClose, anchorEl };
};

export default useChangeLanguageButton;
