import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

class Order extends Component {
    render() {
        const { item } = this.props;
        return(
            <div className="item">
                <img src={`./img/` + item.img} alt="#" />
                <h2>{item.title}</h2>
                <b>{item.price} $</b>
                <FaTrash className="delete-icon" onClick={this.props.onDeleteOrder}/>
            </div>
        )
    }
}

export default Order;