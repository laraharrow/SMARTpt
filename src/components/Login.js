import React, { Component } from 'react';
import PacientInfo from './PacientInfo';
import firebase from '../firebase.js';
import { withAlert } from 'react-alert';
import logo from '../images/logo.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      showData: false
    }
  };

  handleChange = e => {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const passwardRef = firebase.database().ref('login');
    passwardRef.on('value', (login) => {
      const dbValue = login.val();
      if (dbValue.senha === this.state.password && dbValue.user === this.state.name) {
        this.setState({ showData: true })
      } else {
        this.setState({
          name: '',
          password: ''
        });
        this.props.alert.error("incorrect password");
      }
    })
  };

  render() {
    const logedIn = (
      <div>
        <PacientInfo/>
      </div>
    )

    const form = (
      <div>
        <div class="form">
          <h2>LOGIN</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Enter user username" onChange={this.handleChange} value={this.state.name} required/>
            <input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} required/>
            <input type="submit" value="submit"/>
          </form>
        </div>
        <br/>
        <hr/>
        <br/>
        <img id='logo' src={logo}/>
      </div>
    );
    return ( this.state.showData === true ? logedIn : form )
  }
}

export default withAlert(Login);
