import {
  GET_TODOS,
  GET_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions/types";

const initialState = {
  todos: [],
  activeTodo: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: [...payload]
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos]
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id == payload.id ? payload : todo))
      };

    case "SET_ACTIVE_TODO":
      return {
        ...state,
        activeTodo: payload
      };

    case "REMOVE_ACTIVE_TODO":
      return {
        ...state,
        activeTodo: null
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id == payload.id ? payload : todo))
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != payload)
      };
    default:
      return state;
  }
};
