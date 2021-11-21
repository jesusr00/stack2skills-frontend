import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Routing from '~/routes/Routing';
import theme from '~/config/theme';

import '~/config/i18n';

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
