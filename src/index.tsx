import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Global from './components/Styles/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
);
