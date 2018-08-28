import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="homeBody">
                <h2>"When you want it, how you want it"</h2>
                <p className="intro">
                Sheridan Brew is an easy to use app based coffee delivery service that ofers high quality coffee products to your door. Retreiving your daily coffee does not need to be a 20 minute excursion. With the push of a button, get on with your day with Sheridan Brew.
                </p>
                <h3>Contact Us</h3>
                <p className="phone">Office: 319-440-0699</p>
                <p className="email">Email: coffee@sheridan.com</p>
            </div>

        );
    }
}

export default Home;