import {
  GET_TODOS,
  GET_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "./types";
import axios from "axios";

const url = "http://localhost:3004/todos";

// get all todos
export const getTodos = () => async dispatch => {
  const res = await axios.get(url);
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

// // get a todo
// export const getTodo = payload => ({
//   type: type,
//   payload
// });

// create a todo
export const createTodo = todo => async dispatch => {
  const response = await axios.post("http://localhost:3004/todos", todo);
  console.log(response);
  dispatch({
    type: "ADD_TODO",
    payload: response.data
  });
};

// update a todo
export const updateTodo = todo => async dispatch => {
  const { id, ...rest } = todo;
  const response = await axios.put(`http://localhost:3004/todos/${id}`, rest);
  console.log(response);
  dispatch({
    type: "UPDATE_TODO",
    payload: response.data
  });
};

// delete a todo
export const deleteTodo = id => async dispatch => {
  await axios.delete(`http://localhost:3004/todos/${id}`);
  dispatch({
    type: "DELETE_TODO",
    payload: id
  });
};

// set active todo
export const setActiveTodo = todo => ({
  type: "SET_ACTIVE_TODO",
  payload: todo
});

// remove active todo
export const removeActiveTodo = () => ({
  type: "REMOVE_ACTIVE_TODO"
});

// complete todo
export const completeTodo = todo => async dispatch => {
  const response = await axios.put(
    `http://localhost:3004/todos/${todo.id}`,
    todo
  );
  dispatch({
    type: "COMPLETE_TODO",
    payload: response.data
  });
};
