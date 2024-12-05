import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new to-do"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
