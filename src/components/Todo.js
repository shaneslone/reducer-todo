import React from 'react';

export default function Todo(props) {
  const { todo, toggleCompleted, dispatch } = props;
  const handleToggle = e => {
    dispatch(toggleCompleted(e.target.id));
  };
  return (
    <div
      id={todo.id}
      onClick={handleToggle}
      className={todo.completed ? 'completed' : ''}
    >
      {todo.todo}
    </div>
  );
}
