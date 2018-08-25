import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
    render() {
        return(
            <div>
                <h2>Place Order</h2>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form data-coffee-order="form">
                                <div class="form-group">
                                    <label for="CoffeeOrder">CoffeeOrder</label>
                                    <input class="form-control" name="coffee" id="coffeeOrder" autoFocus/>
                                </div>

                                <div class="form-group">
                                    <label for="emailInput">Email</label>
                                    <input class="form-control" type="email" name="emailAddress" id="emailInput" value="" placeholder="dr@who.com"/>
                                </div>

                                <div class="radio">
                                <label>
                                    <input type="radio" name="size" value="short"/>
                                    Short
                                </label>
                                </div>

                                <div class="radio">
                                <label>
                                    <input type="radio" name="size" value="tall" checked/>
                                    Tall
                                </label>
                                </div>

                                <div class="radio">
                                <label>
                                    <input type="radio" name="size" value="grande"/>
                                    Grande
                                </label>
                                </div>

                                <div class="form-group">
                                    <label for="flavorShot">Flavor Shot</label>
                                    <select id="flavorShot" class="form-control" name="flavor">
                                        <option value="">None</option>
                                        <option value="caramel">Caramel</option>
                                        <option value="almond">Almond</option>
                                        <option value="mocha">Mocha</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="strengthLevel">Caffeine Rating</label>
                                    <input name="strength" id="strengthLevel" type="range" value="30"/>
                                </div>

                                <button type="submit" class="btn btn-default">Submit</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </form>
                        </div>
                    </div>
                <ol>
                    <li>Address</li>
                    <li>Size</li>
                    <li>Calculated Cost</li>
                </ol>

                <div id="order list">
                </div>

            </div>
        );
    }
}

export default Order;