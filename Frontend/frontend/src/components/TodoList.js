import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = (title) => {
    axios.post('http://localhost:5000/api/todos', { title })
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
  };

  const toggleComplete = (id) => {
    const todo = todos.find(todo => todo._id === id);
    axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !todo.completed })
      .then(response => setTodos(todos.map(todo => todo._id === id ? response.data : todo)))
      .catch(error => console.error(error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
