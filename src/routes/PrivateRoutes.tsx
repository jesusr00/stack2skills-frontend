import React from 'react';
import {
  Ballot as BallotIcon,
  Dashboard as DashboardIcon,
  AppRegistration as AppRegistrationIcon,
  Groups as GroupsIcon,
} from '@mui/icons-material';

import { RouteManifest } from '~/types';

const ProjectsList = React.lazy(() => import('~/modules/projects'));
const Dashboard = React.lazy(() => import('~/modules/dashboard'));
const CreateOrganization = React.lazy(
  () => import('~/modules/organization/views/CreateOrganization'),
);
const ListOrganizations = React.lazy(
  () => import('~/modules/organization/views/ListOrganizations'),
);
const MyAccount = React.lazy(() => import('~/modules/account'));
const AppRegistry = React.lazy(
  () => import('~/modules/applications/views/AppRegistry'),
);
const ListApplications = React.lazy(
  () => import('~/modules/applications/views/ListApplications'),
);

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
    path: '/apps/registry',
    title: 'app-registry',
    showInSidebar: false,
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
    id: 6,
    path: '/organization',
    title: 'org',
    showInSidebar: true,
    icon: <GroupsIcon />,
    component: () => <ListOrganizations />,
  },
  {
    id: 7,
    path: '/apps',
    title: 'applications',
    showInSidebar: true,
    icon: <AppRegistrationIcon />,
    component: () => <ListApplications />,
  },
  {
    id: 0,
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default routes;
