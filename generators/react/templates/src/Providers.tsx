import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { useSessionState, SessionContext } from './providers/SessionProvider';

type Props = {
  children: any;
};

const Providers = ({ children }: Props) => {
  const sessionState = useSessionState();
  return (
    <BrowserRouter>
      <SessionContext.Provider value={sessionState}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SessionContext.Provider>
    </BrowserRouter>
  );
};

export default Providers;
