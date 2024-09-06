// src/App.jsx
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import appicon from './assets/appicon.png';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-5 text-gray-100">
      {/* Wrap the heading and icon in a flex container */}
      <div className="flex items-center space-x-2 mb-2">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-500 drop-shadow-md">
          Listify
        </h1>
        <img src={appicon} alt="Listify Logo" className="w-8 h-8 lg:w-10 lg:h-10" />
      </div>
      <p className="text-lg lg:text-xl text-center max-w-md lg:max-w-xl mb-6 text-gray-300 font-bold">
        Manage your tasks effectively with Listify. Add, edit, and complete tasks with ease.
      </p>
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-10 w-full max-w-lg lg:max-w-2xl transition duration-500 hover:shadow-2xl">
        <TodoForm addTodo={addTodo} />
        <ul className="mt-6 space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
