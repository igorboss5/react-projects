import React, { useState } from "react";

const Todo = ({ todo, onDelete }) => {
    const [isComplete, setIsComplete] = useState(false);

    const handleCompleteToggle = () => {
        setIsComplete(!isComplete);
    }

    return (
        <div className={`newTodo ${isComplete ? 'complete' : 'uncomplete'}`}>
            <span className={`newTodoText ${isComplete ? 'complete' : ''}`}>{todo.text}</span>
            <div className="container-btn">
                <button onClick={handleCompleteToggle}>
                    {isComplete ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;
