import { Button } from '@mui/material';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { TextAnimateUp } from 'src/components/TextTransitions';

import {
  HomeButtonContainer,
  HomeContainer,
  HomeContent,
  HomeDescContainer,
  HomeGraphics,
  HomeMainTitle
} from './Home.styles';
import HomeCharacter from '/HomeCharacter.svg';

const VantaBackground = lazy(() => import('components/VantaBackground'));

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeDescContainer>
            <HomeMainTitle variant="h3">{t('MainTitle')}</HomeMainTitle>
            <TextAnimateUp
              text={t('MainDesc')}
              textVariant="h5"
              splitBy="word"
              staggerTime={0.075}
            />
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
