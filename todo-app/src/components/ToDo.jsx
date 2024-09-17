import React from "react";

const Todo = ({todo, onDelete}) => {
    return (
        <div className="newTodo">
            <span className="newTodoText">{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default Todo;
