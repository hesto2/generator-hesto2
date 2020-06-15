import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import init from './utils/axiosConfig';
import Providers from './Providers';

init();

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
