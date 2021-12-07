import React from 'react';
import { Route as InnerRoute } from 'react-router-dom';
import Splash from '~/common/components/Splash';
import { RouteManifest } from '~/types';

type RouteProps = RouteManifest;

function Route(props: RouteProps) {
  const { path, component } = props;
  const element = (
    <React.Suspense fallback={<Splash />}>{component}</React.Suspense>
  );
  return <InnerRoute {...{ path, element }} />;
}

export default Route;
