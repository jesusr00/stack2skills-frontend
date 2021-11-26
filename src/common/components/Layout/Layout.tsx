import Header from '../Header';
import AppDrawer from '~/common/components/AppDrawer';
import { CommonProvider } from '~/common/store';

type LayoutProps = {
  children: any;
};

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <CommonProvider>
        <Header />
        <AppDrawer />
        {children}
      </CommonProvider>
    </>
  );
}

export default Layout;
