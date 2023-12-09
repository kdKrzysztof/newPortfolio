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
  const [descAnimateComplete, setDescAnimateComplete] = useState(false);
  const [titleAnimateComplete, setTitleAnimateComplete] = useState(false);
  return (
    <HomeContainer>
      <HomeContent>
        <HomeDescContainer>
          <HomeMainTitle variant="h5">{t('MainTitleH3')}</HomeMainTitle>
          <TextAnimateUp
            text={t('MainTitleH1')}
            textVariant="h1"
            splitBy="word"
            staggerTime={0.4}
            isCompleted={setTitleAnimateComplete}
          />
          <TextAnimateUp
            text={t('MainDesc')}
            textVariant="h4"
            splitBy="word"
            staggerTime={0.075}
            startAfter={titleAnimateComplete}
            isCompleted={setDescAnimateComplete}
          />
          <HomeButtonContainer
            variants={defaultAnimation}
            initial="hidden"
            animate={descAnimateComplete ? 'visible' : 'hidden'}
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
  );
};

export default Home;
