import React from 'react';
import { BrowserRouter, Routes, Route as InnerRoute } from 'react-router-dom';
import Splash from '~/common/components/Splash';
import { RouteManifest } from '~/types';
import routes from './PublicRoutes';

function Routing() {
  function renderRoutes() {
    return routes.map((route) => renderRoute(route));
  }

  function renderRoute(route: RouteManifest) {
    const { path, component, children } = route;

    const innerRoutes = children?.map((i) => renderRoute(i));
    const Component = component(<Routes>{innerRoutes}</Routes>);

    const element = (
      <React.Suspense fallback={Splash}>{Component}</React.Suspense>
    );
    return <InnerRoute key={route.path} {...{ path, element }} />;
  }

  return (
    <BrowserRouter>
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default Routing;
