
import React from 'react';
import {Resolver} from 'react-resolver';

class Help extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Help">
        Hello Help!
		<div class="sub-header contact-icons">
		<div class="call">
			<i class="material-icons">phone</i>
			<h4>CALL</h4>
		</div>

		<div class="search">
			<i class="material-icons">search</i>
			<h4>SEARCH</h4>
		</div>
		
		<div class="email">
			<i class="material-icons">email</i>
			<h4>EMAIL</h4>
		</div>
	</div>

	<div class="info-header">
		<div class="call hidden"><a href="tel:7045555555">704-555-5555</a></div>
		
		<div class="search hidden">
			<h4>Enter a food item:</h4>
			<input type="text">
		</div>
		
		<div class="email hidden"><a href="mailto:crowntowncompost@gmail.com">crowntowncompost@gmail.com</a></div>
	</div>

	<div class="requests">
		<h2>Submit a Request</h2>

		<h4>New Compost Supplies</h4>
		<div class="supply-button liners active"><span>&#10003;</span> Liners</div>
		<div class="supply-button lid"><span class="hidden">&#10003;</span> Lid</div>
		<div class="supply-button bucket"><span class="hidden">&#10003;</span> Bucket</div>

		<h4>Yard Sign</h4>
		<div class="sign-button active keep"><span>&#10003;</span> Keep</div>
		<div class="sign-button remove"><span class="hidden">&#10003;</span> Remove</div>

		<h4>Message</h4>
		<textarea rows="10"></textarea>

		<div class="submit-button">SUBMIT</div>
	</div>
      </div>
    );
  }
}

Help.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Help.displayName = 'Help';

export default Help;
