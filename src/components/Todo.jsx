import React, { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

export const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "記事を書く",
      editing: false,
    },
    {
      id: 2,
      content: "本を読む",
      editing: false,
    },
    {
      id: 3,
      content: "ランニングをする",
      editing: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);

  const createTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };

  const updateTodo = (todo) => {
    const newTodos = todos.map((_todo) => {
      return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
    </div>
  );
};
