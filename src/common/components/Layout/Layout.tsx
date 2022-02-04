import Header from '../Header';
import AppDrawer from '~/common/components/AppDrawer';
import SelectOrganizationDialog from '~/common/components/SelectOrganizationDialog';
import { useEffect, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import appStore from '~/common/store';
import { useServerManager } from '~/common/axios';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const serverManager = useServerManager();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    serverManager.getOrganizatios().then((r) => {
      appStore.setOrgamizations(r.data);
      appStore.organization = query.get('organization')
        ? appStore.organizations?.filter(
            (org) => org.id === query.get('organization'),
          )[0]
        : appStore.organizations?.[0];
      navigate(pathname + '?organization=' + appStore.organization?.id);
      serverManager.refreshInstance();
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) navigate('/auth/sign-in');
  }, [localStorage]);

  return (
    <>
      <Header />
      <AppDrawer />
      <SelectOrganizationDialog />
      {children}
    </>
  );
}

export default Layout;
