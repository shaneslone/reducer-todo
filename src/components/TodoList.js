import React, { useReducer } from 'react';
import reducer from './../reducers';
import Todo from './Todo';
import {
  addTodo,
  setNewTodo,
  toggleCompleted,
  clearFinishedTodos,
} from './../actions';

const initialState = {
  newTodo: '',
  todoList: [],
};

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = e => {
    dispatch(setNewTodo(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(state.newTodo));
  };

  const handleClear = e => {
    e.preventDefault();
    dispatch(clearFinishedTodos());
  };
  return (
    <div>
      {state.todoList.map(todo => (
        <Todo
          todo={todo}
          toggleCompleted={toggleCompleted}
          dispatch={dispatch}
        />
      ))}
      <form>
        <input
          name='todo'
          type='text'
          value={state.newTodo}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
        <button onClick={handleClear}>Clear Completed</button>
      </form>
    </div>
  );
}
