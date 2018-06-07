import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Login from './Login';
import './App.scss';

const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class App extends Component {
  render() {
    return (
			<AlertProvider template={AlertTemplate} {...options}>	
				<Login />
			</AlertProvider>
    )
  }
}

export default App;


