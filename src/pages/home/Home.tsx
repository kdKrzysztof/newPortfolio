import { Button } from '@mui/material';
import { Suspense, lazy, useState } from 'react';
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
import { defaultAnimation } from './framer/animation';
import HomeCharacter from '/HomeCharacter.svg';

const VantaBackground = lazy(() => import('components/VantaBackground'));

const Home = () => {
  const { t } = useTranslation();
  const [textAnimateComplete, setTextAnimateComplete] = useState(false);
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
              isCompleted={setTextAnimateComplete}
            />
            <HomeButtonContainer
              variants={defaultAnimation}
              initial="hidden"
              animate={textAnimateComplete ? 'visible' : 'hidden'}>
              <Button variant="contained">{t('HomeButtonAboutMe')}</Button>
              <Button variant="outlined">{t('HomeButtonContact')}</Button>
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
