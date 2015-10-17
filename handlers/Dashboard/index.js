
import React from 'react';
import {RouteHandler} from 'react-router';
import {Resolver} from 'react-resolver';

class Dashboard extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Dashboard">
        Hello Dashboard!
		<div class="nav">
			<ul class="nav-tabs">
				<li class="active"><a href="index.html">WEEKLY</a></li>
				<li><a href="help.html">HELP</a></li>
				<li><a href="account.html">ACCOUNT</a></li>
			</ul>
		</div>
		<RouteHandler/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
