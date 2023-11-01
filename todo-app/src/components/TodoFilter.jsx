import React from "react";

const TodoFilter = ({ onChange }) => {

    return (
        <div className="container-filter">
            <select onChange={onChange}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default TodoFilter;