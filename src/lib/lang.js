import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/lang/en.json';
import arTranslation from '@/lang/ar.json';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem('i18nextLng')  , // Set the default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;