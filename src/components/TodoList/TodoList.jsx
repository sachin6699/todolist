import React from "react";
import styles from "./TodoList.module.scss";
import Todo from "../Todo"

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        <Todo key={todo.id} todo={todo} />;

        // implicitly return to-do component with the to-do object passed in as prop

        //unique key need when rendering a jsx element from an array
      })}
    </ul>
  );
};

export default TodoList;
