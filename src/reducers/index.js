import { combineReducers } from 'redux';
import TodoReducer from './todoReducer'

export default combineReducers({
  todos: TodoReducer
});