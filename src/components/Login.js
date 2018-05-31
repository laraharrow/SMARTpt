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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // {senha: "cavalo10", user: "jaimie"}
  handleSubmit(e){
    e.preventDefault();
    
    const passwardRef = firebase.database().ref('login');
    passwardRef.on('value', (login) => {
      const dbValue = login.val();
      if (dbValue.senha === this.state.password && dbValue.user === this.state.name) {
        this.setState({ showData: true })
      } else {
        this.setState({ showData: false })
        this.props.alert.error("incorrect password");
      }
    })
  }

  render() {
    const logedIn = (
      <div>
        <PacientInfo/>
      </div>
    )
 
    const form = (  
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} required/>
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.passward} required/>
          <button>Login</button>
        </form>
        <img id='logo' src={logo} />
      </div>
    );
    return ( this.state.showData === true ? logedIn : form ) 
  }
}

export default withAlert(Login);

