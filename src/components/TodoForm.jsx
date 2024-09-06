// src/components/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 sm:gap-2"
    >
      <input
        type="text"
        className="flex-grow border-2 border-gray-700 bg-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300 w-full placeholder-gray-400"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg px-4 py-2 sm:px-5 sm:py-2 font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;