import React from 'react';

import { RouteManifest } from '~/types';

const ProjectsList = React.lazy(() => import('~/modules/projects'));

const routes: RouteManifest[] = [
  {
    id: 1,
    path: '/projects',
    title: 'Projects',
    component: <ProjectsList />,
  },
  {
    path: '*',
    component: <div>Not found</div>,
  },
];

export default routes;
