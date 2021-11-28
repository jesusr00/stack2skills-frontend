import Header from '../Header';
import AppDrawer from '~/common/components/AppDrawer';

type LayoutProps = {
  children: any;
};

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <AppDrawer />
      {children}
    </>
  );
}

export default Layout;
