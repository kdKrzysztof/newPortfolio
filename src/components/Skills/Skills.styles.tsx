import { Box, styled } from '@mui/material';

export const SkillsContent = styled(Box)({
  width: '70%'
});

export const ImageContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

type ImageContentProp = {
  themeColor: 'light' | 'dark';
};

export const ImageContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'themeColor'
})<ImageContentProp>(({ themeColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  marginLeft: 0,
  '& > img': {
    maxWidth: '50px',
    minWidth: '50px',
    filter: themeColor == 'dark' ? 'invert(100%)' : 'invert(0%)',
    color: 'red'
  }
}));
