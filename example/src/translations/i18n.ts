import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import csCZ from "./dictionary/csCZ";
import deDE from "./dictionary/deDE";
import enUS from "./dictionary/enUS";

const FALLBACK_LANG = "en-US";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    detection: {
        order: ["localStorage", "customLangDetector"]
    },
    fallbackLng: FALLBACK_LANG,
    interpolation: {
        escapeValue: false
    },
    lng: FALLBACK_LANG,
    resources: {
        "cs-CZ": {
            ...csCZ
        },
        "de-DE": {
            ...deDE
        },
        "en-US": {
            ...enUS
        }
    }
  });

export default i18n;