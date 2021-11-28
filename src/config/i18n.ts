import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { langs as homeLangs } from '~/modules/home';
import { langs as projectLangs } from '~/modules/projects';
import { langs as commonLangs } from '~/common';
import { langs as organizationLangs } from '~/modules/organization';
import { langs as accountLangs } from '~/modules/account';
import { langs as appRegistryLangs } from '~/modules/appRegistry';
import { Config } from '.';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: Config.isDevelopment(),

    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          home: homeLangs.es,
          projects: projectLangs.es,
          common: commonLangs.es,
          organization: organizationLangs.es,
          account: accountLangs.es,
          appRegistry: appRegistryLangs.es,
        },
      },
      en: {
        translation: {
          home: homeLangs.en,
          projects: projectLangs.en,
          common: commonLangs.en,
          organization: organizationLangs.en,
          account: accountLangs.en,
          appRegistry: appRegistryLangs.en,
        },
      },
    },
  });

export default i18n;
