import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

const AboutMeContentMargin = 40;

export const AboutMeMainContainer = styled(motion.section)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100svw',
  height: 'auto',
  paddingTop: 8,
  paddingBottom: 8,
  backgroundColor: theme.palette.background.aboutMe
}));

export const AboutMeInnerContainer = styled(Box)(({ theme }) => ({
  width: '70%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  '& > *:nth-of-type(1)': {
    marginRight: AboutMeContentMargin
  },
  '& > *:nth-of-type(2)': {
    marginLeft: AboutMeContentMargin
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // "&&" overrides existing style successfully
    '&& > *': {
      margin: 0
    },
    '& > *:nth-of-type(2)': {
      marginTop: AboutMeContentMargin
    }
  }
}));

export const AboutMeContent = styled(Box)({
  width: '70%'
});
