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
    DeleteOrder(order) {
        const filterOrders = this.state.orders.filter(el => el.id !== order.id)
        this.setState({orders: filterOrders})

    }
    render() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        return(
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => this.props.toggleShowModal()}>&times;</span>
                    <h2>Shopping Cart</h2>
                    {orders.map(order => (
                        <Order key={order.id} item={order} onDeleteOrder={() => this.DeleteOrder(order)}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ShoppingCartModal;
