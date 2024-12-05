import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo._id)} className="todo-text">
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo._id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
