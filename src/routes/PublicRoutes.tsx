import React, { lazy } from 'react';

import { RouteManifest } from '~/types';
import PrivateRoutes from './PrivateRoutes';

const Home = lazy(() => import('~/modules/home'));
const Layout = lazy(() => import('~/common/components/Layout'));

const publicRoutes: RouteManifest[] = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: () => <Home />,
  },
  {
    id: 2,
    path: '/app/*',
    component: (children: any) => <Layout {...{ children }} />,
    children: PrivateRoutes,
  },
  {
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default publicRoutes;
