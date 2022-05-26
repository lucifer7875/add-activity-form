import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import React, { Component } from 'react'
import Dashboard from './components/dashboard'
import Login from "./components/login/login"
import Register from "./components/register/register"
import AddActivity from './components/AddActivity/addactivity';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userEvent from '@testing-library/user-event';

function App() {
  const [user, setLoginUser] = useState({
    // name: "",
    //  email: " ",
    //  password: "",
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Dashboard setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/addactivity">
            <AddActivity />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
