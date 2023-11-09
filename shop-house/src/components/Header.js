import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header(props) {

    return(
        <header>
            <span className="logo">House Staff</span>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Профіль</li>
            </ul>
            <FaShoppingCart className="shop-cart-button" />
        </header>
    )
}