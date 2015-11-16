require('./css/styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';
import {Link, RouteHandler} from 'react-router';

class Home extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      user: UserStore.getState().user
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

  render(): ?ReactElement {
    var { router } = this.context;

    var accountLink = <li><Link to="/dashboard">My account</Link></li>;
    var logoutLink = <li><Link to="/home" onClick={this.onLogout.bind(this)}>Log out</Link></li>
    var loginLink = <li><Link to="/home/customer-login">Log in</Link></li>;
    var signupLink = <li><Link to="/home/customer-signup">Sign up</Link></li>;
    var user = this.state.user;

    return (
      <div className="Home">
        <div className="header">
          <Link to="/home">
            <img src={require('url-loader?mimetype=image/png!../Dashboard/ctc-logo.png')} alt="Crown Town Comopost logo" className="logo"/>
          </Link>
          <nav className="nav">
            <ul className="nav-tabs">
              <li>
                <Link to="/home/news">News</Link>
              </li>
              <li>
                <Link to="/home/faq">FAQ</Link>
              </li>
              {user ? accountLink : null}
              {user ? logoutLink : null}
              {!user ? signupLink : null}
              {!user ? loginLink : null}
            </ul>
          </nav>
        </div>

          <RouteHandler />

        <footer>
          <div className="left">
            <h2>In case of emergency</h2>
            <ul>
              <li className="call">
                <a href="tel:9802537670">
                  <i className="material-icons">phone</i>
                </a>
                <h4>CALL</h4>
              </li>
              <li className="email">
                <a href="mailto:crowntowncompost@gmail.com">
                  <i className="material-icons">email</i>
                </a>
                <h4>EMAIL</h4>
              </li>
            </ul>
          </div>
          <div className="right">
            <h2>Track our Adventure</h2>
            <ul>
              <li>
                <a href="https://instagram.com/crowntowncompost/">
                  <div className="border">
                    <img src={require('url-loader?mimetype=image/png!./img/instagram.png')} alt="Instagram logo" />
                  </div>
                </a>
                <h4>INSTAGRAM</h4>
              </li>
              <li>
                <a href="https://twitter.com/ctcompost">
                  <div className="border">
                    <img src={require('url-loader?mimetype=image/png!./img/twitter.png')} alt="Twitter logo" />
                  </div>
                </a>
                <h4>TWITTER</h4>
              </li>
              <li>
                <a href="https://www.facebook.com/crowntowncompost">
                  <div className="border">
                    <img src={require('url-loader?mimetype=image/png!./img/facebook.png')} alt="Facebook logo" />
                  </div>
                </a>
                <h4>FACEBOOK</h4>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
  }


Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
