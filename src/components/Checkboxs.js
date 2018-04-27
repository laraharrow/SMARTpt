import React, { Component } from 'react';

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
		console.log('******', e.target);
		//this.setState({ foo: e.target.value });
	}

	render() {
		return (
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
        <EmailComposer />
      </div>
		);
	}
}

export default Checkboxs;
