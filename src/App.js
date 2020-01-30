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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
      ></TodoItem>
    ));
    return (
      <div className="app">
        <div className="todo-list">{todoItems}</div>
      </div>
    );
  }
}

export default App;
