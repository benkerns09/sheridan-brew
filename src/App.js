import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Order from "./Order";
import Auth from "./Auth";

class App extends Component {
  render() {
    return(
        <HashRouter>
          <div>
            <h1>Sheridan Brew</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/auth">Log In / Sign Up</NavLink></li>
              <li><NavLink to="/order">Order</NavLink></li>
              
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/order" component={Order}/>
              <Route path="/auth" component={Auth}/>
            </div>
            
          </div>
        </HashRouter>
    );
  }
}

export default App;
