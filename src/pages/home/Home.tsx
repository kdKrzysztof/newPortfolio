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
import HomeButton from './subcomponents/HomeButton';
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
              animate={textAnimateComplete ? 'visible' : 'hidden'}
              transition={{ staggerChildren: 0.25 }}>
              <HomeButton text={t('HomeButtonAboutMe')} variant="contained" />
              <HomeButton text={t('HomeButtonContact')} variant="outlined" />
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
