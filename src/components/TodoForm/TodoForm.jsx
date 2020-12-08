import React, { useState } from "react";
import styles from "./TodoForm.module.scss";

import { v4 as uuid } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "", // text desrcibing the todo
    completed: false, // check if task is completed
  });

  // handle the state change of user input
  const handleTaskInputChange = (e) => {
    {
      setTodo({ ...todo, task: e.target.value }); // update state of task by getting the spread of the old todo and updating the new task "string" e.target.value
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // cancels event if it is cancelable -- default action doesn't take place
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });

      // reset the form by calling set to do with a new object that has the old property spread onto it and an updated task property, with an empty string
    } // only gets called if   the todoTask is not empty, trim removes white space (function)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task} // what is being updated when handleTaskInputChange is called
        onChange={handleTaskInputChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoForm;
