import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { TextAnimateUp } from 'src/components/TextTransitions';

import { HomeContainer } from './Home.styles';

const VantaBackground = lazy(() => import('components/VantaBackground'));

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeContainer>
        <TextAnimateUp text={t('MainTitle')} />
        <Suspense fallback={<></>}>
          <VantaBackground />
        </Suspense>
      </HomeContainer>
    </>
  );
};

export default Home;
