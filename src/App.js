import 'core-js/es/map';
import 'core-js/es/set';

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './Components/Util/PrivateRoute';
import logo from './logo.svg';
import './App.css';
import {isLoggedIn, isAdmin} from './Components/Util/Auth';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import GamePage from './Components/Pages/GamePage';
import Database from './Components/Pages/Database';
import Profile from './Components/Pages/Profile';
import Admin from './Components/Pages/Admin';
class App extends Component {
  render() {
  return (
    <Router>
    <div>
      <div id="header">
          <Route component={Header} />
      </div>
      <Switch>
              <Route exact path ="/" component={Home} />
              <Route path ="/login" component={LogIn} />
              <Route path="/signUp" component={SignUp}/>
              <Route path="/games/:id" component={GamePage}/>
              <Route path="/database" component={Database}/>
              <PrivateRoute exact path="/profile" component={Profile}  authed={isLoggedIn()} />
              <PrivateRoute exact path="/admin" component={Admin}  authed={isAdmin()} />
        </Switch>
      <div id="footer" className="footer">
        <Route component={Footer} />
    </div>
  </div>
</Router>
    
  );
}
}

export default App;
