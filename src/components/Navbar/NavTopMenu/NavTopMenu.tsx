import { Grid } from '@mui/material';

import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';

import { NavLinks } from '../NavLinks';
import OpenMenuButton from '../OpenMenuButton';
import { GridButtons, GridContainer, HeaderTitle } from './NavTopMenu.styles';

interface INavTopMenu {
  isBelowWidthBreakpoint: boolean;
}

const NavTopMenu = ({ isBelowWidthBreakpoint }: INavTopMenu) => {
  return (
    <GridContainer container>
      <Grid container item xs={isBelowWidthBreakpoint ? 12 : 2}>
        {isBelowWidthBreakpoint ? (
          <Grid item xs={2}>
            <OpenMenuButton icon="open" />
          </Grid>
        ) : null}
        <Grid item xs>
          <HeaderTitle variant="h4">Portfolio</HeaderTitle>
        </Grid>
        {isBelowWidthBreakpoint ? <Grid item xs={2} /> : null}
      </Grid>
      {isBelowWidthBreakpoint ? null : (
        <>
          <Grid item xs>
            <NavLinks />
          </Grid>
          <GridButtons item xs={2}>
            <ChangeLanguageButton />
            <ChangeThemeButton />
          </GridButtons>
        </>
      )}
    </GridContainer>
  );
};

export default NavTopMenu;
