import Header from '../Header';
import AppDrawer from '~/common/components/AppDrawer';
import SelectOrganizationDialog from '~/common/components/SelectOrganizationDialog';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

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
