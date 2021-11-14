import React from 'react';

export type RouteManifest = {
  path: string;
  component:
    | ((childen: any) => React.ReactElement)
    | React.ReactElement
    | React.LazyExoticComponent<() => React.ReactElement>;
  id?: number;
  showInSidebar?: boolean;
  title?: string;
  conditionToRender?: () => boolean;
  permissionsNeeds?: string[];
  children?: RouteManifest[];
};
