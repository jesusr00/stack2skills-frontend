import { CssBaseline, ThemeProvider } from '@mui/material';
import Routing from '~/routes/Routing';
import theme from '~/config/theme';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Routing />
      </>
    </ThemeProvider>
  );
}

export default App;
