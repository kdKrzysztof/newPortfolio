import { Grid, Typography, styled } from '@mui/material';

export const GridContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  height: '100%'
}));

export const GridTitle = styled(Grid)(() => ({
  width: '100%'
}));

export const HeaderTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
});
