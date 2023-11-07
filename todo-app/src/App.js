import React, { useState, useEffect } from "react";
import './App.css'
import ToDo from "./components/ToDo";
import TodoFilter from "./components/TodoFilter";
import { Droppable, DragDropContext } from 'react-beautiful-dnd';

export const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
    const [criteria, setCriteria] = useState('All')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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

    const handleDragEnd = (result) => {
        console.log(result)
        if (!result.destination) return;
 
        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
 
        setTodos(items);
    };
 
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
                <DragDropContext onDragEnd={handleDragEnd}>
                    <StrictModeDroppable droppableId="todos">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {filteredTodos.map((todo, index) => (
                                    <ToDo
                                        key={todo.id}
                                        todo={todo}
                                        onDelete={handleDeleteTodo}
                                        onComplete={handleCompleteTodo}
                                        onEdit={handleEdit}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </StrictModeDroppable>
                </DragDropContext>
            </div>
    )
 }
 
 export default App;