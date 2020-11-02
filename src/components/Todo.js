import React from 'react';

export default function Todo(props) {
  const { todo, toggleCompleted, dispatch } = props;
  const handleToggle = e => {
    dispatch(toggleCompleted(e.target.id));
  };
  return (
    <div key={todo.id} id={todo.id} onClick={handleToggle}>
      {todo.todo}
    </div>
  );
}
