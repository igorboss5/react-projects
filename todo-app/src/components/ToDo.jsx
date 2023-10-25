import React from "react";

const ToDo = ({ todo, onDelete }) => {

    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}

export default ToDo;