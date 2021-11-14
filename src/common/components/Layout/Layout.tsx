import Header from '../Header';

type LayoutProps = {
  children: any;
};

function Layout(props: LayoutProps) {
  const { children } = props;
  console.log(children);
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
