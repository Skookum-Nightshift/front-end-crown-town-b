import React from 'react';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';

class CustomerRegistration extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var firstName = this.refs.firstName.getDOMNode().value;
    var lastName = this.refs.lastName.getDOMNode().value;
    var email = this.refs.email.getDOMNode().value;

    apiPost('v1/sign_up',
      { user: { first_name: firstName, last_name: lastName, email: email} }, 
      user => {
        UserActions.updateUser(user);
        this.context.router.transitionTo('home');
      },
      errors => UserActions.registrationFailed(errors)
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <input type="text" placeholder="First Name" ref="firstName"/>
          </div>
          <div>
            <input type="text" placeholder="Last Name" ref="lastName" />
          </div>
          <div>
            <input type="text" placeholder="Email" ref="email" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

CustomerRegistration.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CustomerRegistration;