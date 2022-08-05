import React from "react";
import { useTodos } from "../context/TodoContext";
import { Item } from "./Item";

export const List = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.map((todo) => {
        return <Item id={todo.id} todo={todo} />;
      })}
    </div>
  );
};
