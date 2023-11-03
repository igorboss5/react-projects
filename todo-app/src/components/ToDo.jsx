import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUndo, faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todo, onDelete, onComplete, onEdit }) => {
    const [editing, setEditing] = useState(false)
    const [editedText, setEditedText] = useState(todo.text)

    const handleEdit = () => {
        setEditing(!editing)
    }

    const handleSave = () => {
        onEdit({...todo, text: editedText});
        setEditing(false);
    }
    
    return (
        <div className={`newTodo ${todo.isComplete ? 'completed' : ''}`}>
            {editing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(event) => setEditedText(event.target.value)}
                    />
                    <button onClick={handleSave}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <div className="container-button">
                        <button onClick={() => onComplete(todo)}>
                            {!todo.isComplete ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faUndo} />}
                        </button>
                        <button onClick={handleEdit}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => onDelete(todo)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </>
                )
            }
        </div>
    )
}

export default ToDo;