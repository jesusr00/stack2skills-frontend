import React from 'react';
import {} from 'react-router-dom';
import {
  Ballot as BallotIcon,
  Dashboard as DashboardIcon,
  AppRegistration as AppRegistrationIcon,
} from '@mui/icons-material';

import { RouteManifest } from '~/types';

const ProjectsList = React.lazy(() => import('~/modules/projects'));
const Dashboard = React.lazy(() => import('~/modules/dashboard'));
const AppRegistry = React.lazy(() => import('~/modules/appRegistry'));

const routes: RouteManifest[] = [
  {
    id: 1,
    path: '/',
    title: 'dashboard',
    showInSidebar: true,
    icon: <DashboardIcon />,
    component: () => <Dashboard />,
  },
  {
    id: 2,
    path: '/projects',
    title: 'projects',
    showInSidebar: true,
    icon: <BallotIcon />,
    component: () => <ProjectsList />,
  },
  {
    id: 3,
    path: '/app-registry',
    title: 'app-registry',
    showInSidebar: true,
    icon: <AppRegistrationIcon />,
    component: () => <AppRegistry />,
  },
  {
    id: 0,
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default routes;
