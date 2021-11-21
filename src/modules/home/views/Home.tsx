import React from 'react';
import { useTranslation } from 'react-i18next';

function Home(): JSX.Element {
  const [t, i18next] = useTranslation();

  return (
    <div>
      <h1>{t('home.hello-word')}</h1>
      <button onClick={() => i18next.changeLanguage('es')}>ES</button>
      <button onClick={() => i18next.changeLanguage('en')}>EN</button>
    </div>
  );
}

export default Home;
