import React, { useState } from "react";
import './App.css'
import ToDo from "./components/ToDo";
import TodoFilter from "./components/TodoFilter";

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [criteria, setCriteria] = useState('All')

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleAddTodo = () => {
        if (input === '') return

        const newTodo = {
            id: Date.now(),
            text: input,
            isCompleted: false
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

    const handleCompleteTodo = (clickedTodo) => {
        const updateTodos = todos.map((todo) => {
            if (todo.id === clickedTodo.id) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo;
        })
        setTodos(updateTodos)
        console.log(updateTodos);
    }

    const handleFilterTodo = (event) => {
        const filterTodo = event.target.value;
        setCriteria(filterTodo)
    }

    const filteredTodos = todos.filter((todo) => {
        if (criteria === "Completed") return todo.isCompleted;
        if (criteria === "Uncompleted") return !todo.isCompleted;
        return true;
    })

    const handleEdit = (editedTodo) => {
        const updateTodos = todos.map((todo) =>
            todo.id === editedTodo.id ? editedTodo : todo
        );
        setTodos(updateTodos);
    }

    return (
        <div className="App">
            <div className="container-add-todo">
                <h1>Todo App</h1>
                <input 
                    className="input-text"
                    type="text" 
                    value={input} 
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="button-add" onClick={handleAddTodo}>Add</button>
            </div>
            <TodoFilter onChange={handleFilterTodo} />

            {filteredTodos.map((todo) => {
                return <ToDo
                    key={todo.id}
                    todo={todo}
                    onDelete={handleDeleteTodo}
                    onComplete={handleCompleteTodo}
                    onEdit={handleEdit}
                />
            })}
        </div>
    )
}

export default App;