import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Routing from '~/routes/Routing';
import theme from '~/config/theme';
import { ServerManagerProvider } from '~/common';
import '~/config/i18n';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <ServerManagerProvider>
        <>
          <CssBaseline />
          <Routing />
        </>
      </ServerManagerProvider>
    </ThemeProvider>
  );
}

export default App;
