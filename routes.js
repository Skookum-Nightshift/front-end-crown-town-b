/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import NotFound from './handlers/NotFound';
import App from './handlers/Base';
import Home from'./handlers/Home';
import Dashboard from'./handlers/Dashboard';
import Weekly from './handlers/Dashboard/Weekly';
import Help from './handlers/Dashboard/Help';
import Account from './handlers/Dashboard/Account';
import CustomerLogin from './handlers/Home/CustomerLogin';
import CustomerRegistration from './handlers/Home/CustomerRegistration';
import Landing from './handlers/Home/Landing';
import FAQ from './handlers/Home/FAQ';
import News from './handlers/Home/News';

var routes = (
  <Route path="/" handler={App} >
  
    <DefaultRoute name="landing" handler={Landing} />
    <Route name="faq" handler={FAQ} />
    <Route name="news" handler={News} />
    <Route name="customer-login" handler={CustomerLogin} />
    <Route name="customer-signup" handler={CustomerRegistration} />

    <Route name="dashboard" handler={Dashboard}>
      <DefaultRoute name="weekly" handler={Weekly} />
      <Route name="help" handler={Help} />
      <Route name="account" handler={Account} />
    </Route>

    
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
