import React from "react";
import { Item } from "./Item";

export const List = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Item
            id={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
};
