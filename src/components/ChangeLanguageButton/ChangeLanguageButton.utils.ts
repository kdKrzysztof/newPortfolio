import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

const useChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = (event: MouseEvent<HTMLElement>) => {
    const id = event?.currentTarget?.id;

    if (id) {
      i18n.changeLanguage(event.currentTarget.id);
    }

    setAnchorEl(null);
  };

  return { openMenu, closeMenu, anchorEl };
};

export default useChangeLanguageButton;
