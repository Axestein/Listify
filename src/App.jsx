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
      date: '', // Initialize with no date
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

  const setDate = (id, date) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, date: date } : todo))
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center p-5 text-gray-100 overflow-hidden">
      {/* Surrounding task suggestions */}
{/* Left Side */}
<div className="absolute top-4/12 left-4 hidden lg:flex">
        <p className="text-pink-400 text-sm lg:text-lg opacity-75 mb-8">
          ⚽ Playing football
        </p>
      </div>
      <div className="absolute top-1/2 left-3 hidden lg:flex">
        <p className="text-green-400 text-sm lg:text-lg opacity-75 mt-8 mb-2">
          📚 Studying Math
        </p>
      </div>
      <div className="absolute top-10 left-60 hidden lg:flex">
        <p className="text-yellow-400 text-sm lg:text-lg opacity-75 mt-8 mb-2">
          📝 Writing notes
        </p>
      </div>
      <div className="absolute top-20 left-40 hidden lg:flex">
        <p className="text-green-400 text-sm lg:text-lg opacity-75 mt-10 mb-2">
          🧘 Yoga practice
        </p>
      </div>
      <div className="absolute top-3/4 left-28 hidden lg:flex">
        <p className="text-blue-400 text-sm lg:text-lg opacity-75 mt-8 mb-2">
          🏋️ Going to the gym
        </p>
      </div>
      <div className="absolute bottom-1/4 left-16 hidden lg:flex">
        <p className="text-indigo-400 text-sm lg:text-lg opacity-75 mb-2">
          🎸 Playing guitar
        </p>
      </div>
      <div className="absolute bottom-1/3 left-3 hidden lg:flex">
        <p className="text-lime-400 text-sm lg:text-lg opacity-75 mt-8 mb-2">
          🍳 Cooking new recipes
        </p>
      </div>
      <div className="absolute top-1/4 left-28 hidden lg:flex">
        <p className="text-red-400 text-sm lg:text-lg opacity-75 mt-2 mb-2">
          🏃‍♂️ Morning run
        </p>
      </div>
      <div className="absolute top-1/3 left-8 hidden lg:flex">
        <p className="text-orange-400 text-sm lg:text-lg opacity-75 mb-2">
          🎤 Singing practice
        </p>
      </div>

      {/* Right Side */}
      <div className="absolute top-10 right-60 hidden lg:flex">
        <p className="text-purple-400 text-sm lg:text-lg opacity-75 mt-8 mb-2">
          💻 Coding practice
        </p>
      </div>
      <div className="absolute bottom-1/4 right-16 hidden lg:flex">
        <p className="text-teal-400 text-sm lg:text-lg opacity-75 mb-2">
          📖 Reading a book
        </p>
      </div>
      <div className="absolute top-1/4 right-28 hidden lg:flex">
        <p className="text-orange-400 text-sm lg:text-lg opacity-75 mt-2 mb-2">
          🎨 Drawing
        </p>
      </div>
      <div className="absolute top-3/4 right-28  hidden lg:flex">
        <p className="text-indigo-400 text-sm lg:text-lg opacity-75 mt-8 mb-2">
          📅 Planning schedule
        </p>
      </div>
      <div className="absolute top-1/3 right-8 hidden lg:flex">
        <p className="text-cyan-400 text-sm lg:text-lg opacity-75 mb-2">
          🧘 Meditation
        </p>
      </div>
      <div className="absolute bottom-1/3 right-10 hidden lg:flex">
        <p className="text-yellow-400 text-sm lg:text-lg opacity-75 mb-2">
          📷 Photography
        </p>
      </div>
      <div className="absolute bottom-2/4 right-6 hidden lg:flex">
        <p className="text-pink-400 text-sm lg:text-lg opacity-75 mb-8">
          🎥 Video editing
        </p>
      </div>
      <div className="absolute top-1/2 right-8 hidden lg:flex">
        <p className="text-green-400 text-sm lg:text-lg opacity-75 mt-2">
          🚴 Cycling
        </p>
      </div>
      <div className="absolute top-20 right-40 hidden lg:flex">
        <p className="text-blue-400 text-sm lg:text-lg opacity-75 mt-10 mb-2">
          🏊 Swimming practice
        </p>
      </div>
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-2">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-500 drop-shadow-md">
            Listify
          </h1>
          <img
            src={appicon}
            alt="Listify Logo"
            className="w-8 h-8 lg:w-10 lg:h-10"
          />
        </div>

        <blockquote className="text-lg lg:text-xl text-center max-w-md mt-4 lg:max-w-xl mb-2 text-gray-300 font-bold">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-400 relative inline-block px-2">
            <span className="relative text-white">
              Manage your tasks effectively.
            </span>
          </span>
        </blockquote>

        <p className="text-lg lg:text-xl text-center max-w-md lg:max-w-xl mb-6 text-gray-300 font-bold">
          Whether you want to add new tasks, edit or complete them, Listify makes
          task management a breeze.
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
                setDate={setDate}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
