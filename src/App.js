import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/todos/Todos";
import TodoForm from "./components/todos/TodoForm";
import { getTodos } from "./actions/todoAction";

function App() {
  
  

 

  // const completeTodo = async id => {
  //   const completedTodo = Object.assign(todos.find(todo => todo.id == id), {
  //     completed: true
  //   });
  //   const res = await axios.put(
  //     `http://localhost:3004/todos/${id}`,
  //     completedTodo
  //   );
  //   const updatedTodos = todos.map(todo => (todo.id == id ? res.data : todo));

  //   // setTodos(updatedTodos);
  // };

  


 
  return (
    <div className="App">
      <Header />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <Todos
              />
            </div>
            <div className="column is-3">
              <TodoForm
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
