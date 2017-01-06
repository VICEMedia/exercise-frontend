import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Display from './components/Display';
require('./scss/application.scss');

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Display} />
  </Router>
);
