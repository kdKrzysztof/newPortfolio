import { Grid, Toolbar, Typography } from '@mui/material';

import ChangeThemeButton from '../ChangeThemeButton';
import NavButtons from './NavLinks/NavLinks';
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
            <NavButtons />
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center">
            <ChangeThemeButton />
          </Grid>
        </GridContainer>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
