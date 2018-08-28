import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <div className="form-group row">
                    <div className="col-12">
                        <input className="form-control" type="email" placeholder="Email *" id="email"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-12">
                        <input className="form-control" type="tel" placeholder="Phone # *" id="phone"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-12">
                        <input className="form-control" type="text" placeholder="Address Line 1 *" id="address"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-8">
                        <input className="form-control" type="text" placeholder="Apartment/Condo/Office # *"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-10">
                        <input className="form-control" type="text" placeholder="City" id="city*"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-4">
                        <select className="form-control" id="state">
                            <option selected>State</option>
                            <option value="AL">AL</option>
                            <option value="AR">AR</option>
                        </select>
                    </div>

                    <div className="col-8">
                        <input className="form-control" type="text" placeholder="Zip *" id="zip" />
                    </div>

                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <input className="form-control" type="text" placeholder="Create Username*" id="username" />
                    </div>

                    <div className="col-6">
                        <input className="form-control" type="password" placeholder="Create Password*" id="password*" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-10">
                        <input className="form-control" type="text" placeholder="First Name *" id="firstName" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-10">
                        <input className="form-control" type="text" placeholder="Last Name *" id="lastName" />
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-lg">Sign Up</button>
    
            </div>
        );
    }
}

export default SignUp;