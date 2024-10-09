import React from 'react';

const ToDoList = ({ todos, search, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos
        .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
    </ul>
  );
};

export default ToDoList;
