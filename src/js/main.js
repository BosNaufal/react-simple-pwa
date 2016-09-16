
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/';

import { Router, hashHistory } from 'react-router';
import routes from './router/map.js';


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory } routes={ routes } />
  </Provider>,
  document.getElementById("app")
)
