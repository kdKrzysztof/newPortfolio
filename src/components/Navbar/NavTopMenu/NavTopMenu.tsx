import { Grid } from '@mui/material';

import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';

import NavLinks from '../NavLinks/NavLinks';
import OpenMenuButton from '../OpenMenuButton';
import { GridButtons, GridContainer, GridTitle, HeaderTitle } from './NavTopMenu.styles';

interface INavTopMenu {
  isBelowWidthBreakpoint: boolean;
}

const NavTopMenu = ({ isBelowWidthBreakpoint }: INavTopMenu) => {
  return (
    <GridContainer container>
      <GridTitle container item xs={isBelowWidthBreakpoint ? 12 : 2}>
        {isBelowWidthBreakpoint ? (
          <Grid item xs={2}>
            <OpenMenuButton icon="open" />
          </Grid>
        ) : null}
        <GridTitle item xs>
          <HeaderTitle variant="h4">Portfolio</HeaderTitle>
        </GridTitle>
        {isBelowWidthBreakpoint ? <Grid item xs={2} /> : null}
      </GridTitle>
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
