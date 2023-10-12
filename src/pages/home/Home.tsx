import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <Box>{t('MainTitle')}</Box>;
};

export default Home;
