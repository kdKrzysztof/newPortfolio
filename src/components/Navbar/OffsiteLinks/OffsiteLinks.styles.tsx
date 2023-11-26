import { Box, styled } from '@mui/material';

export const LinksContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 30
});

export const StyledLink = styled('a')(({ theme }) => ({
  marginRight: 5,
  transition: 'color 200ms',
  textDecoration: 'none',
  color: 'inherit',
  marginBottom: 5,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '& > *': {
    fontSize: 20
  }
}));
