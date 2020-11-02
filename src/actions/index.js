export const ADD_TODO = 'ADD_TODO';
export const SET_NEW_TODO = 'SET_NEW_TODO';
export const TOGGLED_COMPLETED = 'TOGGLED_COMPLETED';
export const CLEAR_FINISHED_TODOS = 'CLEAR_FINISHED_TODOS';

const randomID = () => {
  return Math.floor(Math.random() * 100000000);
};

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: { todo: newTodo, completed: false, id: randomID() },
  };
};

export const setNewTodo = todo => {
  return { type: SET_NEW_TODO, payload: todo };
};

export const toggleCompleted = todoID => {
  return { type: TOGGLED_COMPLETED, payload: todoID };
};

export const clearFinishedTodos = () => {
  return { type: CLEAR_FINISHED_TODOS };
};
