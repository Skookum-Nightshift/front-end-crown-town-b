import React from 'react';
import UserActions from '../../actions/UserActions';
import { apiPost } from '../../lib/requestLib';

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
        this.context.router.transitionTo('home');
      },
      errors => this.setState({ errors: errors })
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label>Email</label>
          <input type="text" ref="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref="password" />
        </div>
        <button type='submit'>Login</button>
      </form>
    )
  }
}

CustomerLogin.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CustomerLogin;