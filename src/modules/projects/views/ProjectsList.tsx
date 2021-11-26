import React from 'react';
import { useTranslation } from 'react-i18next';

function ProjectList() {
  const [t, i18n] = useTranslation();

  return (
    <div style={{ marginTop: '6em' }}>
      <h1>{t('projects.projects-list')}</h1>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
}

export default ProjectList;
