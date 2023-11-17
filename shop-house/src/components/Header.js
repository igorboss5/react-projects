import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartModal from "./ShoppingCartModal";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false,
            orders: JSON.parse(localStorage.getItem('orders')) || [],
        };
    }

    toggleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen });
    };

    showOrders = () => {
        let sum = 0;
        this.state.orders.forEach(el => {
            sum += Number.parseFloat(el.price);
        });

        return (
            <div>
                {this.state.orders.map(el => (
                    <ShoppingCartModal key={el.id} item={el} />
                ))}
                <p className='sum'>Сума: {new Intl.NumberFormat().format(sum)}$</p>
            </div>
        );
    };

    showNothing = () => {
        return (
            <div className='empty'>
                <h2>Пусто</h2>
            </div>
        );
    };

    render() {
        return (
            <header>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Профіль</li>
                </ul>
                <FaShoppingCart
                    className={`shop-cart-button ${this.state.cartOpen && 'active'}`}
                    onClick={this.toggleCart}
                />
                {this.state.cartOpen &&
                    (this.state.orders.length > 0 ? this.showOrders() : this.showNothing())
                }
            </header>
        );
    }
}

export default Header;
