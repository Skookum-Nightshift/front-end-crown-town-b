require('./css/styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
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
    var accountLink = <li><Link to="/dashboard">My account</Link></li>;
    var logoutLink = <li><a href="#" onClick={this.onLogout.bind(this)}>Log out</a></li>
    var loginLink = <li><Link to="/customer-login">Log in</Link></li>;
    var signupLink = <li><Link to="/customer-signup">Sign up</Link></li>;
    var user = this.state.user;
    return (
      <div className="Home">
        <div className="header">
          <img src={require('url-loader?mimetype=image/png!../Dashboard/ctc-logo.png')} alt="Crown Town Comopost logo" className="logo"/>
          <nav className="nav">
            <ul className="nav-tabs">
              <li><a href="#">News</a></li>
              <li><a href="#">FAQ</a></li>
              {user ? accountLink : null}
              {user ? logoutLink : null}
              {!user ? signupLink : null}
              {!user ? loginLink : null}
            </ul>
          </nav>
        </div>

        <main>
          <section>
            <h1>Your food waste could feed Charlotte</h1>
            <p>Together with your food waste and our specially-designed bike trailers, we can divert large amounts of food waste from landfills.</p>
          </section>
          <section>
            <h2>Are we in your neighborhood?</h2>
            <form className="" action="#" method="post">
              <p>
                <label for="address">Enter your street address</label>
                <input type="text" name="address" id="address" value=""/>
              </p>
              <a href="in-area.html">Check address [Y]</a>
              <a href="out-of-area.html">Check address [N]</a>
              <input type="submit" value="Check address"/>
            </form>
          </section>
          <section>
            <h2>How we operate</h2>
            <p>You may store your compostable items in our complimentary odor-sealed four gallon bucket. On your scheduled trash collection day leave your bucket outside to be emptied, cleaned and left near your front door. Meanwhile, professional composters turn your food waste into nutrient-rich soils that you can use to grow food in your personal or community garden.</p>
            <p>
              <a href="#">See what items are compostable, recyclable and trash</a>
            </p>
          </section>
          <section>
            <h2>Composting is great for business</h2>
            <p>
              Do you work for or own a local business that is interested in learning more about the benefits of composting?
            </p>
            <p>
              <a href="#">Let us help your business start composting</a>
            </p>
          </section>
          <section>
            <h2>Currently serving Wilmore residents and Atherton Market guests</h2>
            <p>
              We currently operate in Charlotte’s Wilmore neighborhood.

              On Saturday mornings from 9 &ndash; 11 we host Community Compost Days at the Atherton Farmer&#39;s Market where we collect household food waste from community members whose neighborhoods we do not yet service.
            </p>
          </section>
          <section>
            <h2>We&#39;re glad you asked</h2>
            <p>
              <a href="questions.html">Find answers to popular questions</a>
            </p>
          </section>
        </main>
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
            <h2>Be part of our community</h2>
            <ul>
              <li>
                <div className="border">
                  <a href="https://instagram.com/crowntowncompost/">
                    <img src={require('url-loader?mimetype=image/png!./img/instagram.png')} alt="Instagram logo" />
                  </a>
                </div>
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
                <div className="border">
                  <a href="https://www.facebook.com/crowntowncompost">
                    <img src={require('url-loader?mimetype=image/png!./img/facebook.png')} alt="Facebook logo" />
                  </a>
                </div>
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
