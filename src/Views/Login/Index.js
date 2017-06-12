import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import logo from './react.svg';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import './Home.css';




class Login extends Component {

  constructor(props) {
  super(props);

  this.state = {
    email: '',
    password: '',
  };

  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onSubmit.bind(this);
}

onSubmit(e) {
  e.preventDefault();

  axios.post('/login', qs.stringify({ 
    email: 'test@test.com',
    password: 'test'
  }))
  .then(function (response) {
   const token = response.data.token;

   localStorage.setItem('Authorization', token);
   setAuthorizationToken(token);

  })
  .catch(function (error) {
    console.log(error);
  });


}

onChange(e) {
  //this.setState({ [e.target.name]: e.target.value});
}



  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Login View</h2>
          <ul className="Home-resources">
            <li>
              <a href="/">Index of it all</a>
            </li>
            
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
        </ul>
        </div>
        <form onSubmit={this.onSubmit}>
          
          <span>Email:</span>
          <input type="email" name="email" required /><br />
          <span>Contraseña:</span>
          <input type="password" name="password" required /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
