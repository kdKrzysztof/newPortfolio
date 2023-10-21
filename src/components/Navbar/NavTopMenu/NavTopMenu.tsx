import { Grid, Typography } from '@mui/material';

import { ChangeLanguageButton, ChangeThemeButton } from 'src/components';

import NavLinks from '../NavLinks/NavLinks';
import { GridContainer } from './NavTopMenu.styles';

const NavTopMenu = () => {
  return (
    <GridContainer container>
      <Grid item xs={2}>
        <Typography variant="h4">Portfolio</Typography>
      </Grid>
      <Grid item xs>
        <NavLinks />
      </Grid>
      <Grid item xs={2} display="flex" justifyContent="center">
        <ChangeLanguageButton />
        <ChangeThemeButton />
      </Grid>
    </GridContainer>
  );
};

export default NavTopMenu;
