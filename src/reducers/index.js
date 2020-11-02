import {
  ADD_TODO,
  SET_NEW_TODO,
  TOGGLED_COMPLETED,
  CLEAR_FINISHED_TODOS,
} from './../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todoList: [...state.todoList, action.payload], newTodo: '' };
    case SET_NEW_TODO:
      return { ...state, newTodo: action.payload };
    case TOGGLED_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    case CLEAR_FINISHED_TODOS:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.completed === false),
      };
    default:
      return state;
  }
};

export default reducer;
