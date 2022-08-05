import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ createTodo }) => {
  const [enterdTodo, setEnterdTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: enterdTodo,
    };
    createTodo(newTodo);
    setEnterdTodo("");
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
