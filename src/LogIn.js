import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <div className="container">
                <h1>Log In</h1>
                <div className="form-group">
                    <input type="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Username"/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>

                <button type="button" className="btn btn-primary btn-lg">Log In</button>
            </div>
        );
    }
}

export default Login;