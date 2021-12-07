import React, { lazy } from 'react';
import { ReactNode } from 'react';

import { RouteManifest } from '~/types';
import PrivateRoutes from './PrivateRoutes';

const Home = lazy(() => import('~/modules/home'));
const Layout = lazy(() => import('~/common/components/Layout'));
const SignIn = lazy(() => import('~/modules/sign_in'));

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
    component: (children: ReactNode) => <Layout {...{ children }} />,
    children: PrivateRoutes,
  },
  {
    id: 3,
    path: '/sign-in',
    title: 'SignIn',
    component: () => <SignIn />,
  },
  {
    id: 0,
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default publicRoutes;
