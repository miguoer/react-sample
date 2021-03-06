import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes';
import configureStore from './configurestore/configureStore';
import './index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  	<AppRouter/>
  </Provider>,
  document.getElementById('root'))