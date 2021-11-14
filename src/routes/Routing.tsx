import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from '~/common/components/Splash';
import { RouteManifest } from '~/types';
import routes from './Routes';

function Routing() {
  function renderRoutes() {
    return routes.map((route) => renderRoute(route));
  }

  function renderRoute(route: RouteManifest) {
    const { path, component, children } = route;
    let innerComponent = component;

    const innerRoutes = children?.map((i) => renderRoute(i));

    if (typeof component === 'function') {
      innerComponent = component(<Routes>{innerRoutes}</Routes>);
    }
    const element = (
      <React.Suspense fallback={Splash}>{innerComponent}</React.Suspense>
    );
    return <Route key={route.path} {...{ path, element }} />;
  }

  return (
    <BrowserRouter>
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default Routing;
