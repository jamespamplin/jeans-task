import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { OrdersSummary } from './containers/OrdersSummary';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/:country" component={OrdersSummary} />
  </Router>
);
