import { Box, styled } from '@mui/material';

export const ProjectBody = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100svw',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.ProjectsBackgroundColor,
  color: theme.palette.primary.dark,
  '&::before': {
    position: 'absolute',
    width: '100%',
    height: '0.3rem',
    top: 0,
    backgroundColor: theme.palette.primary.dark,
    content: `""`
  },
  '&::after': {
    position: 'absolute',
    width: '100%',
    height: '0.3rem',
    bottom: 0,
    backgroundColor: theme.palette.primary.dark,
    content: `""`
  }
}));

export const ProjectContainer = styled(Box)({
  display: 'flex',
  width: '70%',
  height: '100%',
  justifyContent: 'center'
});
