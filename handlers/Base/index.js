/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import UserStore from '../../stores/UserStore';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): ?ReactElement {
    return (
      <div className="AppBase">
        <RouteHandler />
      </div>
    );
  }
}

export default AppBase;
