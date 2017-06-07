import React, { Component } from 'react';

import './Home.css';

class Register extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <p>Register View</p>
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
        <form method="post">
          <span>Nombre:</span>
          <input type="text" name="firstName" required /><br />
          <span>Apellido:</span>
          <input type="text" name="lastName" required /><br />
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

export default Register;
