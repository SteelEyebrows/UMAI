import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import history from "./lib/routes/history";
import store from "store";
import {GlobalStyle} from './grobalStyle';

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <App/>
      </Router>
  </Provider>,
  document.getElementById('root')
);