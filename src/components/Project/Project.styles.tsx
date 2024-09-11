import { Box, styled } from '@mui/material';

export const ProjectBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  width: '70%',
  height: '100vh',
  minHeight: '200px',
  maxHeight: '200px',
  marginTop: 30,
  marginBottom: 30,
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

export const ProjectImageContainer = styled(Box)({
  height: 'auto'
});
