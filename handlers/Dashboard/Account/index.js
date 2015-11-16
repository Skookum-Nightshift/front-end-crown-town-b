
import React from 'react';
import {Resolver} from 'react-resolver';

class Account extends React.Component {

  render(): ?ReactElement {
    return (
      <div>
    		<div className="sub-header account-icons">
      		<div className="call">
      			<i className="material-icons">attach_money</i>
      			<h4>UPDATE</h4>
      		</div>

      		<div className="search">
      			<i className="material-icons">cancel</i>
      			<h4>CANCEL</h4>
      		</div>
      		
      		<div className="email">
      			<i className="material-icons">add</i>
      			<h4>UPGRADE</h4>
      		</div>
	       </div>
         <div className="account">
        	<div className="current-plan">
        			<h3>Current Plan</h3>

        			<div className="plan">
        				<h2>1 bucket for $10/month</h2>
        				<p>Weekly pickup of one compost bucket</p>
        			</div>
        	</div>

        	<div className="plan-options">
        		<h4>Select a Plan</h4>
        		<div className="plan-button active monthly"><span>&#10003;</span> Monthly</div>
        		<div className="plan-button annual"><span className="hidden">&#10003;</span> Annual</div>

        		<h4>Number of Buckets</h4>
        		<div className="bucket-plan-button active one"><span>&#10003;</span> 1</div>
        		<div className="bucket-plan-button two"><span className="hidden">&#10003;</span> 2</div>
        	</div>
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
