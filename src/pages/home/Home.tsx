import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import LoadingPage from 'pages/loadingPage';

import { HomeContainer } from './Home.styles';

const VantaBackground = lazy(() => import('components/VantaBackground'));

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <LoadingPage />
      <HomeContainer>
        {t('MainTitle')}
        <Suspense fallback={<></>}>
          <VantaBackground />
        </Suspense>
      </HomeContainer>
    </>
  );
};

export default Home;
