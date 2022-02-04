import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Routing from '~/routes/Routing';
import theme from '~/config/theme';
import { appStore } from '~/common';
import '~/config/i18n';
import { SnackbarProvider } from 'notistack';
import Splash from './common/components/Splash';
import { useServerManager } from './common/axios';

function App(): React.ReactElement {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const serverManager = useServerManager();

  React.useEffect(() => {
    serverManager.getGlogalConfig().then((r) => {
      appStore.setProviders(r.data.providers);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <>
              <CssBaseline />
              <Routing />
            </>
          </SnackbarProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
