import React, { useState } from 'react'
import './App.css';
import Todo from './components/ToDo';


function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [select, setSelect] = useState('All')

    const handleUpdateInput = (event) => {
        setInput(event.target.value)
    }
    const handleAddTodo = () => {
        if (input === '') return
        const newTodo = {
            id: Date.now(),
            text: input
        }

        setTodos([...todos, newTodo])

        setInput('');
    }
    const handleDeleteTodo = (idTodoDelete) => {
        const updateTodo = todos.filter((todo) => 
            todo.id !== idTodoDelete);

            setTodos(updateTodo);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') handleAddTodo();
    }

    const handleFilterTodos = () => {
        todos.forEach((todo) => {
            if (todo === 'complete') {
                return todo;
            }
        })
    }

    return (
        <div className="App">
            <input 
                type="text" 
                value={input} 
                onChange={handleUpdateInput}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddTodo}>Add</button>

            <select className="filter-todo">
                <option onClick={handleFilterTodos} value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>

            {todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                )
            })}
        </div>
    )
}

export default App;
