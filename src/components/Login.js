import React, { Component } from 'react';
import PacientInfo from './PacientInfo';

class Login extends Component {
  render() {
    return (
      <div className="container">
      	<div className="row">
      		<div className="col"></div>
      			<div className="col-8">
      				<div class="card">
							  <div class="card-block">
							    This is some text within a card body.
							  </div>
							</div>
      			</div>	
      		<div className="col"></div>	
      	</div>
      </div>
    );
  }
}

export default Login;

// add <PacientInfo /> when login in correct