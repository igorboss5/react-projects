import React from "react";

const TodoFilter = ({ onChange }) => {

    return (
        <div className="container-filter">
            <div className="custom-select-wrapper">
                <select className="custom-select" onChange={onChange}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
                <div className="custom-select-arrow">&#9662;</div>
            </div>
        </div>
    )
}

export default TodoFilter;