import React, { Component } from 'react';

import Content from '../data';

class EmailComposer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>
					Dear {this.props.pacient}, your email is {this.props.email} and foo and bar are {this.props.foo} and{' '}
					{this.props.bar}{' '}
				</p>
			</div>
		);
	}
}

export default EmailComposer;
