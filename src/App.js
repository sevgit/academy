import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Views/Home/Index';
import Login from './Views/Login/Index';
import Register from './Views/Register/Index';
import Dashboard from './Views/Dashboard/Index';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>
);

export default App;
