// src/components/TodoItem.jsx
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`mr-3 text-xl ${
            todo.completed ? 'text-green-400' : 'text-gray-400'
          } hover:text-green-500 transition duration-300`}
        >
          <FaCheck />
        </button>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border-2 border-gray-600 bg-gray-800 text-gray-200 rounded px-3 py-1 w-full focus:outline-none focus:border-blue-500 transition duration-300"
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-300'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleEdit}
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-400 hover:text-red-500 transition duration-300"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
