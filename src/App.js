import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Order from "./Order";
import Auth from "./Auth";
import Logo from './Logo.png';
import Login from "./Login";
import SignUp from "./SignUp";
import TakeMoney from "./Stripe";

//these will run at specific points when we are creating or tearing down react components
//this way when someone leaves the application, the component will unmount

class App extends Component {
  render() {
    return(
        <HashRouter>
          <div>
            <h1>Sheridan Brew <img src={Logo} className="App-logo" alt="TM" /></h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/auth">Log In / Sign Up</NavLink></li>
              <li><NavLink to="/order">Order</NavLink></li>
              <li><NavLink to="/stripe">Add A Card</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/order" component={Order}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/stripe" component={TakeMoney}/>
            </div>
            
          </div>
        </HashRouter>
    );
  }
}

export default App;