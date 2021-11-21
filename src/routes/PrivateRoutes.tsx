import React from 'react';
import {} from 'react-router-dom';

import { RouteManifest } from '~/types';

const ProjectsList = React.lazy(() => import('~/modules/projects'));
const Dashboard = React.lazy(() => import('~/modules/dashboard'));

const routes: RouteManifest[] = [
  {
    id: 1,
    path: '/projects',
    title: 'Projects',
    component: () => <ProjectsList />,
  },
  {
    id: 0,
    path: '/',
    component: () => <Dashboard />,
  },
  {
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default routes;
