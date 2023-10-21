import { Box, styled } from '@mui/material';

export const ButtonsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
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
