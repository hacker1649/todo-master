import React from 'react';
import TodoInput from './Components/todoInput';
import TodoList from './Components/todoList';
import './css/style.css'; 

function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
