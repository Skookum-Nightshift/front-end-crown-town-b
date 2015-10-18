/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="AppBase">
        <h1>Crown Town Compost</h1>
        <RouteHandler />
      </div>
    );
  }
}

export default AppBase;
