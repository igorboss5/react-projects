import React, { useState } from 'react'
import './App.css';
import Todo from './components/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if(inputText.trim() !== '') {
      setTodos([...todos, {id: Date.now(), text: inputText}]);
      setInputText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <input 
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
    </div>
  );
};

export default App;
