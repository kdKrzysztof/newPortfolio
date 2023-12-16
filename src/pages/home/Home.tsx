import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TextAnimateUp } from 'src/components/TextTransitions';

import {
  HomeButtonContainer,
  HomeContainer,
  HomeContent,
  HomeDescContainer,
  HomeGraphics
} from './Home.styles';
import { defaultAnimation, imageAnimation } from './framer/animation';
import HomeButton from './subcomponents/HomeButton';
import HomeCharacter from '/HomeCharacter.svg';

const Home = () => {
  const { t } = useTranslation();
  const [aboveTitleAnimateComplete, setAboveTitleAnimateComplete] = useState(false);
  const [descAnimateComplete, setDescAnimateComplete] = useState(false);
  const [titleAnimateComplete, setTitleAnimateComplete] = useState(false);
  const theme = useTheme();

  return (
    <HomeContainer>
      <HomeContent>
        <HomeDescContainer>
          <TextAnimateUp
            text={t('MainTitleH3')}
            textVariant="h5"
            animationSpeed={0.5}
            isCompleted={setAboveTitleAnimateComplete}
            color="primary"
          />
          <TextAnimateUp
            text={t('MainTitleH1')}
            textVariant="h1"
            staggerTime={0.4}
            animationSpeed={0.25}
            startAfter={aboveTitleAnimateComplete}
            isCompleted={setTitleAnimateComplete}
            sx={{ fontWeight: theme.typography.homeMainTitle.fontWeight }}
          />
          <TextAnimateUp
            text={t('MainDesc')}
            textVariant="h4"
            splitBy="word"
            staggerTime={0.05}
            startAfter={titleAnimateComplete}
            isCompleted={setDescAnimateComplete}
            animationSpeed={1}
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
          <motion.img
            src={HomeCharacter}
            variants={imageAnimation}
            initial="initial"
            animate={aboveTitleAnimateComplete && 'default'}
          />
        </HomeGraphics>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
