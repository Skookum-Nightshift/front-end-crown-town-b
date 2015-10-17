
import React from 'react';
import {Resolver} from 'react-resolver';

class Account extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Account">
        Hello Account!
		<div class="sub-header account-icons">
		<div class="call">
			<i class="material-icons">attach_money</i>
			<h4>UPDATE</h4>
		</div>

		<div class="search">
			<i class="material-icons">cancel</i>
			<h4>CANCEL</h4>
		</div>
		
		<div class="email">
			<i class="material-icons">add</i>
			<h4>UPGRADE</h4>
		</div>
	</div>

	<div class="current-plan">
			<h3>Current Plan</h3>

			<div class="plan">
				<h2>1 bucket for $10/month</h2>
				<p>Weekly pickup of one compost bucket</p>
			</div>
	</div>

	<div class="plan-options">
		<h4>Select a Plan</h4>
		<div class="plan-button active monthly"><span>&#10003;</span> Monthly</div>
		<div class="plan-button annual"><span class="hidden">&#10003;</span> Annual</div>

		<h4>Number of Buckets</h4>
		<div class="bucket-plan-button active one"><span>&#10003;</span> 1</div>
		<div class="bucket-plan-button two"><span class="hidden">&#10003;</span> 2</div>
	</div>
      </div>
    );
  }
}

Account.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Account.displayName = 'Account';

export default Account;
