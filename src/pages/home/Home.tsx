import { Button } from '@mui/material';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import HomeCharacter from 'src/../public/HomeCharacter.svg';
import { TextAnimateUpWord } from 'src/components/TextTransitions';

import {
  HomeButtonContainer,
  HomeContainer,
  HomeContent,
  HomeDescContainer,
  HomeGraphics,
  HomeMainTitle
} from './Home.styles';

const VantaBackground = lazy(() => import('components/VantaBackground'));

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeDescContainer>
            <HomeMainTitle variant="h3">{t('MainTitle')}</HomeMainTitle>
            <TextAnimateUpWord text={t('MainDesc')} textVariant="h5" />
            <HomeButtonContainer>
              <Button variant="contained">About me</Button>
              <Button variant="outlined">Contact with me</Button>
            </HomeButtonContainer>
          </HomeDescContainer>
          <HomeGraphics>
            <img src={HomeCharacter} />
          </HomeGraphics>
        </HomeContent>
        <Suspense fallback={<></>}>
          <VantaBackground />
        </Suspense>
      </HomeContainer>
    </>
  );
};

export default Home;
