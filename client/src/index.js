/* eslint-env browser */

import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import { Routes } from './routes';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
