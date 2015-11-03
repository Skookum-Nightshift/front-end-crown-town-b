import React from 'react';
import AuthenticatedRoute from '../../components/AuthenticatedRoute';
import {RouteHandler, Link} from 'react-router';
import {Resolver} from 'react-resolver';

class Dashboard extends AuthenticatedRoute {
  constructor(props, context) {
    super(props);
  }
  render(): ?ReactElement {
    var { router } = this.context;

    return (
      <div>
        <div className="header">
          <img src={require('url-loader?mimetype=image/png!./ctc-logo.png')} alt="Crown Town Comopost logo" className="logo"/>
      		<nav className="nav">
      			<ul className="nav-tabs">
      				<li className={router.isActive('/dashboard', '', '') ? 'active' : ''}>
                <Link to="/dashboard">WEEKLY</Link>
              </li>
      				<li className={router.isActive('/dashboard/help', '', '') ? 'active' : ''}>
                <Link to="/dashboard/help">HELP</Link>
              </li>
      				<li className={router.isActive('/dashboard/account', '', '') ? 'active' : ''}>
                <Link to="/dashboard/account">ACCOUNT</Link>
              </li>
      			</ul>
      		</nav>
        </div>
        <RouteHandler/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Dashboard.contextTypes = {
  router: React.PropTypes.func
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
