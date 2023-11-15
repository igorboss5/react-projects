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
          id: Date.now(),
          title: 'Крісло',
          img: 'chair.jpeg',
          desc: 'Lorem ioas asdsa dasds asdsd',
          category: 'chairs',
          price: '49.99'
        },
        {
          id:  Date.now(),
          title: 'Стіл',
          img: 'table.jpeg',
          desc: 'Lorem ioas asdsa dasds asdsd',
          category: 'tables',
          price: '149.99'
        },
        {
          id:  Date.now(),
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
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
      </div>
    )
  }

  addToOrder(item) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(item);
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}

export default App;