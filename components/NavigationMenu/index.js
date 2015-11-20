import React from 'react';
import {Link} from 'react-router';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getState().user,
      inDashboard: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onLogout() {
    UserActions.deleteUser();
  }

  componentDidMount() {
    UserStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({user: state.user});
  }

  render() {
    var accountLink = <li><Link to="/dashboard">My account</Link></li>;
    var logoutLink = <li><a href="#" onClick={this.onLogout.bind(this)}>Log out</a></li>
    var loginLink = <li><Link to="/customer-login">Log in</Link></li>;
    var signupLink = <li><Link to="/customer-signup">Sign up</Link></li>;
    var user = this.state.user;

    var { router } = this.context;

    if (router.isActive('/dashboard', '', '') ||
        router.isActive('/dashboard/help', '', '') ||
        router.isActive('/dashboard/account', '', '')) {

      return (
        <nav className="nav">
          <ul className="nav-tabs">
            <li className={router.isActive('/dashboard', '', '') ? 'active' : ''}>
              <Link to="dashboard">WEEKLY</Link>
            </li>
            <li className={router.isActive('/dashboard/help', '', '') ? 'active' : ''}>
              <Link to="help">HELP</Link>
            </li>
            <li className={router.isActive('/dashboard/account', '', '') ? 'active' : ''}>
              <Link to="account">ACCOUNT</Link>
            </li>
          </ul>
        </nav>
      );

    } else {

      return (
        <nav className="nav">
          <ul className="nav-tabs">
            <li><a href="/new">News</a></li>
            <li><a href="/faq">FAQ</a></li>
            {user ? accountLink : null}
            {user ? logoutLink : null}
            {!user ? signupLink : null}
            {!user ? loginLink : null}
          </ul>
        </nav>
      );

    }
  }

}

NavigationMenu.contextTypes = {
  router: React.PropTypes.func
};

export default NavigationMenu;