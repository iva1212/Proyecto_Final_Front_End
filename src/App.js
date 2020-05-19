import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
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
