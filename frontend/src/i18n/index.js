import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { SUPPORTED_LANGUAGE_CODES, useLanguageStore } from "../stores/languageStore";

const initialLanguage = useLanguageStore.getState().language || "en";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: initialLanguage,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGE_CODES,
    load: "currentOnly",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

useLanguageStore.subscribe((state) => {
  if (i18n.language !== state.language) {
    i18n.changeLanguage(state.language);
  }
});

export default i18n;
