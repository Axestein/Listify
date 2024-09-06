import React, { useState } from 'react';
import { FiEdit, FiTrash, FiCheckCircle } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo, setDate, setTime }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [time, setTimeLocal] = useState(todo.time || ''); // Initialize with existing time

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleDateChange = (e) => {
    setDate(todo.id, e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(todo.id, e.target.value);
    setTimeLocal(e.target.value);
  };

  return (
    <li
      className={`flex items-center justify-between bg-gray-700 p-4 rounded-lg ${
        todo.completed ? 'opacity-60 line-through' : ''
      }`}
    >
      <div className="flex-1 flex items-center">
        {isEditing ? (
          <form onSubmit={handleEdit} className="flex items-center space-x-2">
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="p-2 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="text-green-500">
              <FiCheckCircle size={18} />
            </button>
          </form>
        ) : (
          <span
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''
              }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
        )}

        {/* Display date and time if selected */}
        <div className="flex items-center space-x-2">
          {todo.date && (
            <span className="ml-4 text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-md border border-gray-600">
              {new Date(todo.date).toLocaleDateString('en-GB', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          )}
          {todo.time && (
            <span className="ml-2 text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-md border border-gray-600">
              {new Date(`1970-01-01T${todo.time}:00`).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Clock icon for time */}
        <label className="relative text-gray-400 hover:text-white cursor-pointer">
          <BiTime size={24} />
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          />
        </label>
        {/* Calendar icon */}
        <label className="relative text-gray-400 hover:text-white cursor-pointer">
          <AiOutlineCalendar size={24} />
          <input
            type="date"
            value={todo.date || ''}
            onChange={handleDateChange}
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          />
        </label>
        {/* Check icon to mark as complete */}
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`text-green-400 ${todo.completed ? 'opacity-50' : ''}`}
        >
          <FiCheckCircle size={20} />
        </button>
        {/* Edit icon */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-yellow-500 hover:text-yellow-400"
        >
          <FiEdit size={20} />
        </button>
        {/* Delete icon */}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-400"
        >
          <FiTrash size={20} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
