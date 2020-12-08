import React from "react";
import styles from "./Todo.module.scss";

const Todo = ({ todo }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <li
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
};
// 1. place new task submit next to original input box
// 2. if the task is coompleted, give a line through to it using ternary operator
export default Todo;
