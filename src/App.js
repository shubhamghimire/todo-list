import './App.css';
import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState(['Do medidation.', 'Go for a run.']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //This will called when we clicked the button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Hello from todo-list app</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>


      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
