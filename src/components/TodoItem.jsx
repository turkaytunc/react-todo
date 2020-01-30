import React, { Component } from "react";
import "../css/TodoItem.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => console.log("changed")}
        />
        <p className="todo-item-paragraph">{this.props.item.title}</p>
      </div>
    );
  }
}

export { TodoItem };
