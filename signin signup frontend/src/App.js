import './App.css';
import { useState } from 'react'
import React from 'react'
import Dashboard from './components/dashboard'
import Login from "./components/login/login"
import Register from "./components/register/register"
import AddActivity from './components/AddActivity/addactivity';
import GetActivity from "./components/GetActivity/getactivity"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/addactivity">
            <AddActivity />
          </Route>
          <Route path="/getactivity">
            <GetActivity />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
