import { MenuItem } from '@mui/material';
import type { MouseEventHandler } from 'react';

import type { IAvailableLanguages } from 'src/i18n';

interface ILanguageItem {
  id: IAvailableLanguages;
  onClick: MouseEventHandler<HTMLLIElement> | undefined;
  children?: string;
}

const LanguageItem = ({ onClick, id, children }: ILanguageItem) => {
  return (
    <MenuItem onClick={onClick} id={id}>
      {children}
    </MenuItem>
  );
};

export default LanguageItem;
