import React, { useRef, useState } from 'react';

function AddTodo({ addTodo }) {
  const [input, setInput] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
      
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>Add</button>
    </form>
  );
}

export default AddTodo;
