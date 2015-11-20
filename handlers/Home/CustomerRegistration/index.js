import React from 'react';
import {apiPost} from 'requestLib';
import UserActions from '../../../actions/UserActions';

class CustomerRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const first_name = this.refs.firstName.getDOMNode().value;
    const last_name = this.refs.lastName.getDOMNode().value;
    const address_line1 = this.refs.addressLine1.getDOMNode().value;
    const address_line2 = this.refs.addressLine2.getDOMNode().value;
    const address_city = this.refs.addressCity.getDOMNode().value;
    const address_state = this.refs.addressState.getDOMNode().value;
    const address_zip = this.refs.addressZip.getDOMNode().value;
    const email = this.refs.email.getDOMNode().value;
    const subscription = this.refs.subscription.getDOMNode().value;

    // customer card info
    const name = this.refs.cardHolderName.getDOMNode().value;
    const number = this.refs.cardNumber.getDOMNode().value;
    const cvc = this.refs.cardCVC.getDOMNode().value;
    const exp_month = this.refs.expMonth.getDOMNode().value;
    const exp_year = this.refs.expYear.getDOMNode().value;

    // customer purchase data
    var subscriptionData = {
      // card data
      name,
      number,
      cvc,
      exp_month,
      exp_year,
      // personal data
      address_line1,
      address_line2,
      address_city,
      address_state,
      address_zip
    };

    // get the stripe token
    console.log(subscriptionData);

    Stripe.card.createToken(subscriptionData, (status, response) => {
      if (response.error) {
        let errors = this.state.errors;
        errors.push(response.error.message);
        this.setState({errors: errors});
      } else {
        var stripe_token = response.id;
        console.log(stripe_token);

        let accountData = { 
          stripe_token,
          subscription,
          user: {
            email,
            first_name, 
            last_name, 
            address_line_1: address_line1,
            address_line_2: address_line2,
            city: address_city,
            state: address_state,
            zip: address_zip
          }
        };

        apiPost('v1/sign_up', 
          { user: accountData }, 
          user => {
            console.log(user);
            UserActions.updateUser(user);
            this.context.router.transitionTo('home');
          },
          errors => {
            console.log('ERRORS!!!')
            console.log(errors);
            this.setState({ errors: errors });
          }
        );
      }
    });

    
  }

  render() {
    return (
      <div className="Home">
        <main>
          <section className="blue">
            <h1>Create an Account</h1>
          </section>
          <section className="grey">
            <div>
              <form onSubmit={this.onSubmit}>
                <div>
                  <input type="text" placeholder="First Name" ref="firstName"/>
                </div>
                <div>
                  <input type="text" placeholder="Last Name" ref="lastName" />
                </div>
                <div>
                  <input type="text" placeholder="Street Address" ref="addressLine1"/>
                </div>
                <div>
                  <input type="text" placeholder="Address Line 2" ref="addressLine2"/>
                </div>
                <div>
                  <input type="text" placeholder="City" ref="addressCity"/>
                </div>
                <div>
                  <input type="text" placeholder="State" ref="addressState"/>
                </div>
                <div>
                  <input type="text" placeholder="Zip Code" ref="addressZip"/>
                </div>
                <div>
                  <input type="text" placeholder="Phone" ref="phone" />
                </div>
                <div>
                  <input type="text" placeholder="Email" ref="email" />
                </div>
                <div>
                  <input type="text" placeholder="Card Holder Name" ref="cardHolderName" />
                </div>
                <div>
                  <input type="text" placeholder="Card Number" ref="cardNumber" />
                </div>
                <div>
                  <input type="text" placeholder="CVC" ref="cardCVC" />
                </div>
                <div>
                  <input type="number" placeholder="Expiry Month" ref="expMonth" />
                </div>
                <div>
                  <input type="number" placeholder="Expiry Year" ref="expYear" />
                </div>
                <div>
                  <select ref="subscription">
                    <option value="1monthly">1 Bucket For $10/Month</option>
                    <option value="2monthly">2 Buckets For $15/Month</option>
                    <option value="1yearly">1 Bucket For $110/Year</option>
                    <option value="2yearly"> 2 Buckets For $165/Year</option>
                  </select>
                </div>
                <input type="submit" value="REGISTER" className="button red-button"/>
              </form>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

CustomerRegistration.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CustomerRegistration;