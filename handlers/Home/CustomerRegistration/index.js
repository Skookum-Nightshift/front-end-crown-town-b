import React from 'react';
// import AuthService from '../../lib/AuthService';

class CustomerRegistration extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var firstName = this.refs.firstName.getDOMNode().value;
    var lastName = this.refs.lastName.getDOMNode().value;
    var email = this.refs.email.getDOMNode().value;

    apiPost('v1/sign_up',
      {first_name: firstName, last_name: lastName, email: email}, 
      user => {
        UserActions.updateUser(user);
        this.context.router.transitionTo('home');
      },
      errors => UserActions.registrationFailed(errors)
    );
  }

  render() {
    return (
      <main>
        <section className="blue">
          <h1>Create an Account</h1>
        </section>
        <section className="grey">
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
              <div>
                <input type="password" placeholder="Password" ref="password" />
              </div>
              <input type="submit" value="REGISTER" className="button red-button"/>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

CustomerRegistration.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CustomerRegistration;