import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import todoApi from "../api/todo";
import { useDispatchTodos } from "../context/TodoContext";

export const Form = () => {
  const [enterdTodo, setEnterdTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: enterdTodo,
    };
    todoApi.post(newTodo).then(() => {
      dispatch({ type: "todo/add", todo: newTodo });
      setEnterdTodo("");
    });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enterdTodo}
          onChange={(e) => setEnterdTodo(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};
