import { AppBar, Toolbar } from '@mui/material';
import { FakeToolbar } from './styles';

function Header() {
  return (
    <>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <FakeToolbar />
    </>
  );
}

export default Header;
