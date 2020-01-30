import React, { Component } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { TodoData } from "./TodoData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: TodoData
    };
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item}></TodoItem>
    ));
    return (
      <div className="app">
        <div className="todo-list">{todoItems}</div>
      </div>
    );
  }
}

export default App;
