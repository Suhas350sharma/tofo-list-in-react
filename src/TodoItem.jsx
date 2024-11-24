import React from 'react';

function TodoItem({ todo, toggleComplete }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        style={{ marginRight: '10px' }}
      />
      {todo.text}
    </li>
  );
}

export default TodoItem;
