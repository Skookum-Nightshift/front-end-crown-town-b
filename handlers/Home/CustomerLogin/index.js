import React from 'react';
import UserActions from '../../../actions/UserActions';
import { apiPost } from '../../../lib/requestLib';

class CustomerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submitting login data!');
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    console.log({email, password});

    apiPost('v1/sign_in', {email, password}, 
      user => {
        UserActions.updateUser(user);
        this.context.router.transitionTo('dashboard');
      },
      errors => this.setState({ errors: errors })
    );
  }

  render() {
    return (
      <div className="Home">
        <main>
          <section className="blue">
            <h1>Log In</h1>
          </section>
          <section className="grey">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div>
                <input type="text" placeholder="Email" ref="email" />
              </div>
              <div>
                <input type="password" placeholder="Password" ref="password" />
              </div>
              <input type="submit" value="LOG IN" className="button red-button"/>
            </form>
          </section>
        </main>
      </div>
    )
  }
}

CustomerLogin.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CustomerLogin;