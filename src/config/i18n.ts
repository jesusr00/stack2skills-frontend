import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { langs as homeLangs } from '~/modules/home';
import { langs as projectLangs } from '~/modules/projects';
import { langs as commonLangs } from '~/common';
import { langs as organizationLangs } from '~/modules/organization';
import { langs as accountLangs } from '~/modules/account';
import { langs as applicationsLangs } from '~/modules/applications';
import { langs as signInLangs } from '~/modules/sign_in';
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
          applications: applicationsLangs.es,
          signIn: signInLangs.es,
        },
      },
      en: {
        translation: {
          home: homeLangs.en,
          projects: projectLangs.en,
          common: commonLangs.en,
          organization: organizationLangs.en,
          account: accountLangs.en,
          applications: applicationsLangs.en,
          signIn: signInLangs.en,
        },
      },
    },
  });

export default i18n;
