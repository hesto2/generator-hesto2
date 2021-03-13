import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Providers from './Providers';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn:
    'https://353db735ab2c42768e0539c68f16e1e2@o453466.ingest.sentry.io/5672478',
  enabled: process.env.NODE_ENV === 'development',
});

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback="An error has occurred">
      <Providers>
        <App />
      </Providers>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
