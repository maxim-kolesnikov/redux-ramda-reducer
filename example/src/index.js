import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import configureStore from './redux/store';

const { store } = configureStore();

export const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);