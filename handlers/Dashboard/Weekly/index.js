/** @flow */
'use strict';

import React from 'react';
import {apiPost} from '../../../lib/requestLib';
import UserActions from '../../../actions/UserActions';

class Weekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };

  }

  cancelPickup() {
    // make an API call to update pickup status
    var user = this.props.user;
    apiPost('v1/users/cancel_pickup', null,
      resp => {
        console.log(resp);
        UserActions.updateUser(resp);
      },
      errors => this.setState({errors: errors}),
      {Authorization: `Bearer ${user.auth_token}`}
    );
  }

  onBucketLocationChanged(location) {
    var user = this.props.user;
    apiPost('v1/users/update_bucket_location', {bucket_location: location},
      resp => {
        console.log(resp);
        UserActions.updateUser(resp);
      },
      errors => this.stateState({errors: errors}),
      {Authorization: `Bearer ${user.auth_token}`}
    );
  }

  render(): ?ReactElement {
    if (!this.props.user) { return <div></div>; }
    var { bucket_location, can_pickup } = this.props.user;
    var isFrontDoor = bucket_location === 'Front Door';
    var isGarage = bucket_location === 'Garage';
    return (
      <div className="Weekly">

      	<div className="sub-header countdown">
          <div className="number-border">
      		  <div className="number">7</div>
          </div>
      		<div className="countdown-text">DAYS UNTIL PICK-UP</div>
      	</div>

      	<div className="weekly-options">
      		<div
            className="cancel-button cancel-pickup"
            onClick={this.cancelPickup.bind(this)}>
            {can_pickup ? 'CANCEL PICK-UP' : 'ACTIVATE PICK-UP'}
          </div>

      		<h4>Bucket location for pickup:</h4>
      		<div className="button-group">
      			<div 
              className={"bucket-button door " + (isFrontDoor ? 'active' : '')}
              onClick={this.onBucketLocationChanged.bind(this, 'Front Door')}>
              <span className={!isFrontDoor ? 'hidden' : ''}>&#10003;</span>Front Door
            </div>
      			<div 
              className={"bucket-button garage " + (isGarage ? ' active' : '')}
              onClick={this.onBucketLocationChanged.bind(this, "Garage")}>
              <span className={!isGarage ? 'hidden' : ''}>&#10003;</span> Garage
            </div>
      		</div>	
      	</div>

      </div>
	
    );
  }
}

Weekly.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Weekly.displayName = 'Weekly';

export default Weekly;
