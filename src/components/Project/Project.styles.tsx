import { Box, styled } from '@mui/material';

const ProjectDescMargin = 40;

export const ProjectBody = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: 40,
  marginBottom: 40
});

export const ProjectDesc = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  '& > *:nth-of-type(1)': {
    marginRight: ProjectDescMargin
  },
  '& > *:nth-of-type(2)': {
    marginLeft: ProjectDescMargin
  }
});

export const ProjectImageContainer = styled(Box)({
  height: 'auto',
  minWidth: '500px'
});

export const ProjectHeader = styled(Box)({
  width: '100%'
});
