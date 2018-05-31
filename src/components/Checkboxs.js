import React, { Component } from 'react';

import EmailComposer from './EmailComposer';

class Checkboxs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			foo: false,
			bar: false
		};

		this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	handleCheckbox(e) {
		this.setState({ [e.target.name]: e.target.checked });
	}

	render() {
		return (
			<div>
				<form>
					<label>
						foo
						<input name="foo" type="checkbox" checked={this.state.foo} onChange={this.handleCheckbox} />
					</label>

					<label>
						bar
						<input name="bar" type="checkbox" checked={this.state.bar} onChange={this.handleCheckbox} />
					</label>
				</form>
				<div>
					<EmailComposer foo={this.state.foo} bar={this.state.bar} />
				</div>
			</div>
		);
	}
}

export default Checkboxs;
