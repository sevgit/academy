import React, { Component } from 'react';

import './Home.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          
          <h2>DASHBOARD</h2>
        </div>
       
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
    );
  }
}

export default Dashboard;
