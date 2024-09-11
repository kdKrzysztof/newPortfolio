import { Box, styled } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

export const ProjectBody = styled('section')(({ theme }) => ({
  width: '100svw',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.ProjectsBackgroundColor,
  color: theme.palette.primary.dark
}));

export const ProjectContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2
});

export const ProjectHeader = styled(Box)({
  width: '70%'
});
