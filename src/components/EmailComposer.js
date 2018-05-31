import React, { Component } from 'react';
import firebase from '../firebase.js';

class EmailComposer extends Component {
	constructor(props) {
		super(props);

		this.toSend;

		this.createEmailBody = this.createEmailBody.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
	}

	createEmailBody() {
		let emailBody = [];
		let dbValue;

		const passwardRef = firebase.database().ref('data');
		passwardRef.on('value', (options) => {
		dbValue = options.val();
		}); 

		for (let text in this.props) {
			if (this.props[text] === true) {
			  emailBody.push(<p>{dbValue[text]}</p>)
			}
		}	 
		this.toSend = emailBody;
		return emailBody;
	}

	sendEmail(e) {
		let templatesList = '';

		for (let i = 0; i < this.toSend.length; i++) {
			templatesList += '%0D%0A';
			templatesList += this.toSend[i].props.children;
			templatesList += '%0D%0A';
		}

		let email = this.props.email;
		let subject = 'SMART PT Follow Up';
		let attach = '/Users/laraismael/Documents/projects/SMARTpt/src/templates/logo.png';
		let emailBody = `Hello ${
			this.props.patient
		},%0D%0A Here is the follow up information from our recent appointment. It was great working with you! Let me know if you have any additional questions.%0D%0A
 ${templatesList}%0D%0A%0D%0A`;

		document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody + '&attach=' + attach;
	}

	render() {
		return (
			<div>
				<div>
					<p>
						Hello , Here is the follow up information from our recent appointment. It was great working with you! Let me
						know if you have any additional questions.
						{this.createEmailBody()}
					</p>
				</div>

				<div>
					<button onClick={this.sendEmail}>Create Email</button>
				</div>
			</div>
		);
	}
}

export default EmailComposer;
