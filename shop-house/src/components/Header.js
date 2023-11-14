import React from "react";
import { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartModal from "./ShoppingCartModal";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.toggleShowModal = this.toggleShowModal.bind(this)
    }

    toggleShowModal() {
        this.setState({showModal: !this.state.showModal})
    }
    render() {
        return(
            <header>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Профіль</li>
                </ul>
                <FaShoppingCart className="shop-cart-button" onClick={this.toggleShowModal}/>
                {this.state.showModal ? <ShoppingCartModal toggleShowModal={this.toggleShowModal}/> : null}
            </header>
        )
    }
}

export default Header;