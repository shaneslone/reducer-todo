import React, { useReducer } from 'react';
import reducer from './../reducers';
import Todo from './Todo';
import { addTodo, setNewTodo } from './../actions';

const initialState = {
  newTodo: '',
  todoList: [],
};

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const handleChange = e => {
    dispatch(setNewTodo(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(state.newTodo));
  };
  return (
    <div>
      {state.todoList.map(todo => (
        <Todo todo={todo} />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          name='todo'
          type='text'
          value={state.newTodo}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
