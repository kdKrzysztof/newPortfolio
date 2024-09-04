import { Box, styled } from '@mui/material';

export const ProjectBody = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '23rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.ProjectsBackgroundColor,
  color: theme.palette.primary.dark
}));
