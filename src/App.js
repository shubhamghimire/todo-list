import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState(['Do medidation.', 'Go for a run.']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //This will called when we clicked the button
    event.preventDefault();
    setTodos([...todos, input]);
    // Clear the input after hitting submit button or enter key
    setInput('');
  }

  return (
    <div>
      <h1>Hello from todo-list app</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">Add-Todo</Button>
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
