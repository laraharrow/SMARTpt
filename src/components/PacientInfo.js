import React, { Component } from 'react';

import EmailComposer from './EmailComposer';

class PacientInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pacient: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pacient:
            <input type="text" value={this.state.pacient} name="pacient" onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          </label>

          <input type="submit" value="Create Email" />
        </form>
        <div>
          <EmailComposer pacient={this.state.pacient} email={this.state.email} />
        </div>
      </div>
    );
  }
}

export default PacientInfo;
