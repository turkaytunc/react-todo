import React, { Component } from "react";
import "../css/TodoItem.css";

class TodoItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="todo-item"
        style={{
          transform: this.props.item.completed
            ? "translateX(1.5em)"
            : "translateX(0)",
          backgroundColor: this.props.item.completed
            ? "rgb(236, 231, 201)"
            : "rgb(164, 216, 236)"
        }}
      >
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={event => this.props.handleChange(this.props.item.id)}
        />
        <p
          className="todo-item-paragraph"
          style={{
            textDecoration: this.props.item.completed ? "line-through" : "none"
          }}
        >
          {this.props.item.title}
        </p>
      </div>
    );
  }
}

export { TodoItem };
