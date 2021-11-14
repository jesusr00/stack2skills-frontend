import React from 'react';

import { RouteManifest } from '~/types';
import PrivateRoutes from './PrivateRoutes';

const Home = React.lazy(() => import('~/modules/home'));
const Layout = React.lazy(() => import('~/common/components/Layout'));

const routes: RouteManifest[] = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: <Home />,
  },
  {
    id: 2,
    path: '/app/*',
    component: (children: any) => <Layout {...{ children }} />,
    children: PrivateRoutes,
  },
  {
    path: '*',
    component: <div>Not found</div>,
  },
];

export default routes;
