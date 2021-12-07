import { ReactNode } from 'react';

export type RouteManifest = {
  path: string;
  component: (childen: ReactNode) => ReactNode;
  id: number;
  showInSidebar?: boolean;
  title?: string;
  conditionToRender?: () => boolean;
  permissionsNeeds?: string[];
  children?: RouteManifest[];
  icon?: ReactNode;
};
