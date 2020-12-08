import React,  { useState } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos]); // add new todo to begining, with the old todos spread over it
  }

  return (
    <div>
      <header>
        <p>React Todo List</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>

    </div>
  );
}

export default App;
