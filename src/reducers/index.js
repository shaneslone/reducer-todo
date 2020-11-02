import { ADD_TODO, SET_NEW_TODO } from './../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case SET_NEW_TODO:
      return { ...state, newTodo: action.payload };
    default:
      return state;
  }
};

export default reducer;
