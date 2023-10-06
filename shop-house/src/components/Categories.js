import React, { Component } from "react";

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всі'
                },
                {
                    key: 'chairs',
                    name: 'Крісла'
                },
                {
                    key: 'sofa',
                    name: 'Дивани'
                },
                {
                    key: 'tables',
                    name: 'Столи'
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}