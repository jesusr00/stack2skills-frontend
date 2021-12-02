import React from 'react';
import SignIn from '~/modules/sign_in/index';

import { RouteManifest } from '~/types';
import PrivateRoutes from './PrivateRoutes';

const Home = React.lazy(() => import('~/modules/home'));
const Layout = React.lazy(() => import('~/common/components/Layout'));

const routes: RouteManifest[] = [
  {
    id: 1,
    path: '/',
    title: 'home',
    component: () => <Home />,
  },
  {
    id: 2,
    path: '/app/*',
    component: (children: any) => <Layout {...{ children }} />,
    children: PrivateRoutes,
  },
  {
    id: 3,
    path: '/sign-in',
    title: 'signin',
    component: () => <SignIn />,
  },
  {
    id: 0,
    path: '*',
    component: () => <div>Not found</div>,
  },
];

export default routes;
