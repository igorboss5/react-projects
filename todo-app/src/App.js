import React, { useState } from 'react'
import './App.css';
import Todo from './components/ToDo';


function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('All')

    const handleUpdateInput = (event) => {
        setInput(event.target.value)
    }
    const handleAddTodo = () => {
        if (input === '') return
        const newTodo = {
            id: Date.now(),
            text: input,
            isComplete: false
        }

        setTodos([...todos, newTodo])

        setInput('');
    }
    const handleDeleteTodo = (idTodoDelete) => {
        const updateTodos = todos.filter((todo) => 
            todo.id !== idTodoDelete);

            setTodos(updateTodos);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') handleAddTodo();
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case 'Completed':
              return todo.isComplete;
            case 'Uncompleted':
              return !todo.isComplete;
            default:
              return true;
        }
    })
        
    return (
        <div className="App">
            <input 
                type="text" 
                value={input} 
                onChange={handleUpdateInput}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddTodo}>Add</button>

            <select className="filter-todo" value={filter} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>

            {todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                )
            })}
            {filteredTodos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} filter={filter}/>
                )
            })}
        </div>
    )
}

export default App;
