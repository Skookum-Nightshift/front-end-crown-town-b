/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import UserStore from '../../stores/UserStore';
import NavigationMenu from '../../components/NavigationMenu';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): ?ReactElement {
    return (
      <div className="AppBase">
        <div className="header">
          <a href="/">
            <img src={require('url-loader?mimetype=image/png!../Dashboard/ctc-logo.png')} alt="Crown Town Comopost logo" className="logo"/>
          </a>
          <NavigationMenu />
        </div>
        <RouteHandler />
      </div>
    );
  }
}

export default AppBase;
