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
import CustomerLogin from './handlers/CustomerLogin';
import CustomerRegistration from './handlers/CustomerRegistration';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="dashboard" handler ={Dashboard}>
      <DefaultRoute name="weekly" handler ={Weekly}/>
      <Route name="help" handler ={Help}/>
      <Route name="account" handler ={Account}/>
    </Route>
    <Route name="customer-login" handler={CustomerLogin} />
    <Route name="customer-signup" handler={CustomerRegistration} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
