import { Grid, Toolbar, Typography } from '@mui/material';

import ChangeLanguageButton from 'components/ChangeLanguageButton';
import ChangeThemeButton from 'components/ChangeThemeButton';

import NavLinks from './NavLinks/NavLinks';
import { GridContainer, StyledAppbar } from './Navbar.styles';

const Navbar = () => {
  return (
    <StyledAppbar position="fixed" elevation={0}>
      <Toolbar sx={{ width: '80%' }}>
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
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
