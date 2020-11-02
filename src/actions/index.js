export const ADD_TODO = 'ADD_TODO';
export const SET_NEW_TODO = 'SET_NEW_TODO';

export const addTodo = newTodo => {
  return { type: ADD_TODO, payload: newTodo };
};

export const setNewTodo = todo => {
  return { type: SET_NEW_TODO, payload: todo };
};
