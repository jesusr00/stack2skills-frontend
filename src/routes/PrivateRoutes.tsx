import React from 'react';
import {
  Ballot as BallotIcon,
  Dashboard as DashboardIcon,
  AppRegistration as AppRegistrationIcon,
} from '@mui/icons-material';

import { RouteManifest } from '~/types';

const ProjectsList = React.lazy(() => import('~/modules/projects'));
const Dashboard = React.lazy(() => import('~/modules/dashboard'));
const CreateOrganization = React.lazy(
  () => import('~/modules/organization/views/CreateOrganization'),
);
const MyAccount = React.lazy(() => import('~/modules/account'));
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
    path: '/organization/create',
    title: 'create',
    showInSidebar: false,
    component: () => <CreateOrganization />,
  },
  {
    id: 4,
    path: '/app-registry',
    title: 'app-registry',
    showInSidebar: true,
    icon: <AppRegistrationIcon />,
    component: () => <AppRegistry />,
  },
  {
    id: 5,
    path: '/account',
    title: 'account',
    showInSidebar: false,
    component: () => <MyAccount />,
  },
  {
    id: 0,
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default routes;
