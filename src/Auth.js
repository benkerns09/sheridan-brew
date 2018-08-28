import React, { Component } from "react";
import "./Auth.css";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";

class Auth extends Component {
    render() {
        return (
            <HashRouter>
                <div className="Auth">
                    <ul className="header">
                        <li><NavLink to="./Login">Login</NavLink></li>
                        <li><NavLink to="./SignUp">Sign Up</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/Login" component={Login}/>
                        <Route path="/SignUp" component={SignUp}/>
                    </div>
                </div>
            </HashRouter>


        );
    }
}

export default Auth;