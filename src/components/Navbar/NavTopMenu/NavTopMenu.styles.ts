import { Grid, Typography, styled } from '@mui/material';

export const GridContainer = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '90%'
}));

export const HeaderTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
});

export const GridButtons = styled(Grid)({
  display: 'flex',
  justifyContent: 'center'
});
