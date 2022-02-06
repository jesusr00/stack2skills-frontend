import React from 'react';
import {
  Ballot as BallotIcon,
  Dashboard as DashboardIcon,
  AppRegistration as AppRegistrationIcon,
  Code as CodeIcon,
} from '@mui/icons-material';

import { RouteManifest } from '~/types';

const ProjectsList = React.lazy(() => import('~/modules/projects'));
const Dashboard = React.lazy(() => import('~/modules/dashboard'));
const CreateOrganization = React.lazy(
  () => import('~/modules/organization/views/CreateOrganization'),
);
const MyAccount = React.lazy(() => import('~/modules/account'));
const AppRegistry = React.lazy(
  () => import('~/modules/applications/views/AppRegistry'),
);
const ListApplications = React.lazy(
  () => import('~/modules/applications/views/ListApplications'),
);
const CreateRepositorySource = React.lazy(
  () => import('~/modules/repository-source/views/CreateRepositorySource'),
);
const ListRepositorySource = React.lazy(
  () => import('~/modules/repository-source/views/ListRepositorySource'),
);
const ListOrganizations = React.lazy(
  () => import('~/modules/organization/views/ListOrganizations'),
);
const CreateProject = React.lazy(
  () => import('~/modules/projects/views/CreateProject'),
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
    id: 7,
    path: '/apps',
    title: 'applications',
    showInSidebar: true,
    icon: <AppRegistrationIcon />,
    component: () => <ListApplications />,
  },
  {
    id: 8,
    path: '/repository-source',
    title: 'repository-source',
    showInSidebar: true,
    icon: <CodeIcon />,
    component: () => <ListRepositorySource />,
  },
  {
    id: 9,
    path: '/repository-source/create',
    title: 'repository-source',
    showInSidebar: false,
    component: () => <CreateRepositorySource />,
  },
  {
    id: 10,
    path: '/organization',
    title: 'org',
    showInSidebar: false,
    component: () => <ListOrganizations />,
  },
  {
    id: 11,
    path: '/projects/create',
    title: 'projects',
    showInSidebar: false,
    component: () => <CreateProject />,
  },
  {
    id: 0,
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default routes;
