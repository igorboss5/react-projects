import React, { Component } from "react";

class Item extends Component {
    render() {
        const { item } = this.props
        return(
            <div className="item">
                <img src={`./img/` + item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}</b>
                <div className="add-to-cart" onClick={() => this.props.onAdd(item)}>+</div>
            </div>
        )
    }
}

export default Item;