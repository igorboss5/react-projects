import React, { useState } from "react";

const Todo = ({ todo, onDelete, filter }) => {
    const [isComplete, setIsComplete] = useState(todo.isComplete);

    const handleCompleteToggle = () => {
        setIsComplete(prevIsComplete => !prevIsComplete);
    }
    const isVisible =
        filter === 'All' ||
        (filter === 'Completed' && isComplete) ||
        (filter === 'Uncompleted' && !isComplete);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`newTodo ${isComplete ? 'complete' : 'uncomplete'}`}>
            <span className={`newTodoText ${isComplete ? 'complete' : ''}`}>
                {todo.text}
            </span>
            
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
