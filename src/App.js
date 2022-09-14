import React from 'react'
import './App.css';
import TodoProvider from './providers/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="App">
      <h2>Todo List</h2>

      <TodoProvider>
      <TodoForm/>
        <TodoList/>
        </TodoProvider>
    </div>
  );
};

export default App;
