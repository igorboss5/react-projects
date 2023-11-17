import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Крісло',
          img: 'chair.jpeg',
          desc: 'Lorem ioas asdsa dasds asdsd',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'table.jpeg',
          desc: 'Lorem ioas asdsa dasds asdsd',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ioas asdsa dasds asdsd',
          category: 'chairs',
          price: '229.99'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }

  addToOrder(item) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const isItemInOrders = orders.some(element => element.id === item.id);
    if (!isItemInOrders) {
      const updatedOrders = [...orders, item];
      this.setState({ orders: updatedOrders });
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
      </div>
    )
  }
}

export default App;