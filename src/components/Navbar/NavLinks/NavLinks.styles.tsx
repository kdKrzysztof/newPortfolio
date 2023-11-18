import { Box, styled } from '@mui/material';

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
}));

export const StyledLink = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  transition: 'color 200ms',
  fontSize: theme.typography?.navLinks.fontSize,
  inlineSize: 'max-content',

  [theme.breakpoints.down('md')]: {
    marginTop: 2,
    marginBottom: 2
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
