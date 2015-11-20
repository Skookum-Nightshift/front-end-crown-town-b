
import React from 'react';
import {Resolver} from 'react-resolver';
import {apiPost} from 'requestLib';

class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showCall: false,
			showSearch: false,
			showEmail: false 
		};

		this.sendRequest = this.sendRequest.bind(this);
	}

	onPhone() {
		this.setState({
			showCall: !this.state.showCall,
			showSearch: false,
			showEmail: false
		});
	}

	onSearch() {
		this.setState({
			showCall: false,
			showSearch: !this.state.showSearch,
			showEmail: false
		});
	}

	onEmail() {
		this.setState({
			showCall: false,
			showSearch: false,
			showEmail: !this.state.showEmail
		});
	}

	sendRequest() {
		let body = this.refs.messageBody.getDOMNode().value;
		let user = this.props.user;
		apiPost('v1/users/request', { body }, response => {
			console.log(response);
		},
		null,
		{ Authorization: `Bearer ${user.auth_token}` });
	}

  render(): ?ReactElement {
    return (
      <div>
				<div className="sub-header contact-icons">
					<div className="call" onClick={this.onPhone.bind(this)}>
						<i className={"material-icons " + (this.state.showCall ? "active-icon" : "")}>phone</i>
						<h4>CALL</h4>
					</div>

					<div className="search" onClick={this.onSearch.bind(this)}>
						<i className={"material-icons " + (this.state.showSearch ? "active-icon" : "")}>search</i>
						<h4>SEARCH</h4>
					</div>
			
					<div className="email" onClick={this.onEmail.bind(this)}>
						<i className={"material-icons " + (this.state.showEmail ? "active-icon" : "")}>email</i>
						<h4>EMAIL</h4>
					</div>
				</div>

				<div className="info-header">
					<div className={"call " + (this.state.showCall ? '' : 'hidden')}><a href="tel:7045555555">704-555-5555</a></div>
					
					<div className={"search " + (this.state.showSearch ? '' : 'hidden')}>
						<h4>Enter a food item:</h4>
						<input type="text"/>
					</div>
					
					<div className={"email " + (this.state.showEmail ? '' : 'hidden')}><a href="mailto:crowntowncompost@gmail.com">crowntowncompost@gmail.com</a></div>
				</div>

				<div className="requests">
					<h2>Submit a Request</h2>

					<h4>Message</h4>
					<textarea rows="10" ref="messageBody"></textarea>

					<div className="submit-button" onClick={this.sendRequest} >SUBMIT</div>
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
