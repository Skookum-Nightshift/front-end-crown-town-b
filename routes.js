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
import CustomerLogin from './handlers/CustomerLogin';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="dashboard" handler ={Dashboard}>
      <DefaultRoute name="weekly" handler ={Weekly}/>
      <Route name="help" handler ={Help}/>
      <Route name="account" handler ={Account}/>
    </Route>
    <Route name="customer-login" handler={CustomerLogin} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
