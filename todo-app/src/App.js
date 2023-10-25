import React, { useState } from "react";
import './App.css'
import ToDo from "./components/ToDo";

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);


    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleAddTodo = () => {
        if (input === '') return

        const newTodo = {
            id: Date.now(),
            text: input
        }
        setTodos([...todos, newTodo]);

        setInput('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') handleAddTodo();
    }

    const handleDeleteTodo = (idDeleteTodo) => {
        const updateTodos = todos.filter((todo) => todo.id !== idDeleteTodo.id);        

        setTodos(updateTodos)
    }

    return (
        <div className="App">
            <input 
                className="input-text" 
                type="text" 
                value={input} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button className="button-add" onClick={handleAddTodo}>Add</button>

            {todos.map((todo) => {
                return <ToDo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
            })}
        </div>
    )
}

export default App;