import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Store from './redux/Store';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
