import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationNO from "./locales/no/translation.json";
import translationRU from "./locales/ru/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pl: { translation: translationPL },
      fr: { translation: translationFR },
      no: { translation: translationNO },
      ru: { translation: translationRU },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "pl", "fr", "no", "ru"],
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
