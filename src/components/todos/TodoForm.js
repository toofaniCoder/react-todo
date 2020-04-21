import React, { Fragment, useState, useEffect, useRef } from "react";
import axios from "axios";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  updateTodo,
  removeActiveTodo
} from "../../actions/todoAction";

const TodoForm = () => {
  const dispatch = useDispatch();
  const activeTodo = useSelector(state => state.todos.activeTodo);
  const inputRef = useRef();
  const [text, setText] = useState("");

  useEffect(
    () => {
      if (activeTodo) {
        setText(activeTodo.title);
        inputRef.current.focus();
      } else {
        setText("");
      }
    },
    [activeTodo]
  );

  const onSubmit = async e => {
    e.preventDefault();
    // check if todo for updatation or for new todo
    if (activeTodo) {
      const UpdtTodo = Object.assign(activeTodo, { title: text });
      dispatch(updateTodo(UpdtTodo));
      dispatch(removeActiveTodo());
    } else {
      let newTodo = {
        title: text,
        completed: false
      };

      dispatch(createTodo(newTodo));
    }

    setText("");
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <div className="field">
          <label className="label">Todo</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter Your Todo"
              value={text}
              onChange={e => setText(e.currentTarget.value)}
              ref={inputRef}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className={classNames("button", {
                "is-link": !activeTodo,
                "is-warning": activeTodo
              })}
            >
              {activeTodo ? "Update Todo" : "Add Todo"}
            </button>
            {activeTodo &&
              <button
                className="button is-light"
                style={{ marginLeft: "10px" }}
              >
                cancel
              </button>}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default TodoForm;
