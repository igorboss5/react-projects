import React, { Component } from "react";
import './ShoppingCartModal.css';
import Order from "./Order";

class ShoppingCartModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: JSON.parse(localStorage.getItem('orders')) || []
        }
    }
    deleteOrder = (order) => {
        const filterOrders = this.state.orders.filter(el => el.id !== order.id)
        this.setState({ orders: filterOrders })
        localStorage.setItem('orders', JSON.stringify(filterOrders))
    }
    render() {
        return(
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.toggleCart}>&times;</span>
                    <h2>Shopping Cart</h2>
                    {this.state.orders.map(order => (
                        <Order key={order.id} item={order} onDeleteOrder={() => this.deleteOrder(order)}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ShoppingCartModal;
