import React from "react";

const ToDo = ({ todo, onDelete, onComplete }) => {
    
    return (
        <div className={todo.isComplete ? 'completed' : 'newTodo'}>
            <span>{todo.text}</span>
            <button onClick={() => onComplete(todo)}>
                {!todo.isComplete ? 'Complete' : 'Undo'}
            </button>
            <button onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}

export default ToDo;