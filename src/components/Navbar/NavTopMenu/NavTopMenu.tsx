import { Grid } from '@mui/material';

import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';

import NavLinks from '../NavLinks/NavLinks';
import OpenMenuButton from '../OpenMenuButton';
import { GridContainer, GridTitle, HeaderTitle } from './NavTopMenu.styles';

interface INavTopMenu {
  isBelowWidthBreakpoint: boolean;
}

const NavTopMenu = ({ isBelowWidthBreakpoint }: INavTopMenu) => {
  return (
    <GridContainer container>
      <GridTitle container item xs={isBelowWidthBreakpoint ? 12 : 1}>
        {isBelowWidthBreakpoint ? (
          <Grid item xs={2}>
            <OpenMenuButton icon="open" />
          </Grid>
        ) : null}
        <GridTitle item xs>
          <HeaderTitle variant="h4">Portfolio</HeaderTitle>
        </GridTitle>
        {isBelowWidthBreakpoint ? (
          <Grid item xs={2} display="flex" justifyContent="center">
            <ChangeLanguageButton />
            <ChangeThemeButton />
          </Grid>
        ) : null}
      </GridTitle>
      {isBelowWidthBreakpoint ? null : (
        <>
          <Grid item xs>
            <NavLinks />
          </Grid>
          <Grid item xs={1} display="flex" justifyContent="center">
            <ChangeLanguageButton />
            <ChangeThemeButton />
          </Grid>
        </>
      )}
    </GridContainer>
  );
};

export default NavTopMenu;
