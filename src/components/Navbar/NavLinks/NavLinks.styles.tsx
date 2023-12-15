import { Box, styled } from '@mui/material';

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 35
  }
}));

export const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  fontSize: theme.typography?.navLinks.fontSize,
  fontFamily: theme.typography?.navLinks.fontFamily,

  [theme.breakpoints.down('md')]: {
    marginTop: 10,
    marginBottom: 10
  },

  '&::before': {
    position: 'absolute',
    content: `""`,
    width: '0%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 200ms'
  },
  '&:hover': {
    color: theme.palette.primary.main,
    '&::before': {
      width: '100%',
      transition: 'width 200ms'
    }
  }
}));

export const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  transition: 'color 200ms',
  '&:hover': {
    color: theme.palette.primary.main
  }
}));
