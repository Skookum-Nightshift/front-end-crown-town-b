/** @flow */
'use strict';

require('./styles.css');

import React from 'react';

class Weekly extends React.Component {

  render(): ?ReactElement {
    return (
       <div className="Weekly">
        Hello Weekly!

    	<div class="sub-header countdown">
    		<div class="number">7</div>
    		<div class="countdown-text">DAYS UNTIL PICK-UP</div>
    	</div>

    	<div class="weekly-options">
    		<div class="cancel-button cancel-pickup">CANCEL PICK-UP</div>
    		<div class="cancel-button pickup-cancelled">&#10003; PICK-UP CANCELLED</div>
    		<div class="cancel-button cancel-not-available" disabled>TOO LATE TO CANCEL</div>
    
    		<h4>Bucket location for pickup:</h4>
    		<div class="button-group">
    			<div class="bucket-button door active"><span>&#10003;</span> Front Door</div>
    			<div class="bucket-button garage"><span class="hidden">&#10003;</span> Garage</div>
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
