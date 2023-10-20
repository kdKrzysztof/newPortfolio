import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { translationEN, translationPL } from 'data/locales';

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

export type IAvailableLanguages = keyof typeof resources;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
