import React, { Fragment, useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  deleteTodo,
  setActiveTodo,
  completeTodo
} from "../../actions/todoAction";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const onCompleteTodo = id => {
    const completedTodo = Object.assign(todos.find(todo => todo.id == id), {
      completed: true
    });
    console.log(completedTodo)
    dispatch(completeTodo(completedTodo));
  };

  if (!todos) {
    return <h1>wait..</h1>;
  }

  return (
    <table className="table is-bordered  is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>todo</th>
          <th>completed</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo =>
          <tr key={todo.id}>
            <td>
              {todo.id}
            </td>
            <td className={classNames({ completed: todo.completed })}>
              {todo.title}
            </td>
            <td>
              {todo.completed
                ? <span className="tag is-success">yes</span>
                : <Fragment>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        onClick={() => onCompleteTodo(todo.id)}
                      />
                      <span className="tag is-light">no</span>
                    </label>
                  </Fragment>}
            </td>
            <td>
              <button
                className="button margin-right-small"
                disabled={todo.completed}
                onClick={() => dispatch(setActiveTodo(todo))}
              >
                edit
              </button>
              <button
                className="button"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Todos;
