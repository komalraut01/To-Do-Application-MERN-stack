import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <p>🌞 Hey, Take It Slow and Savor the Moments! ☕🕰️</p>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
