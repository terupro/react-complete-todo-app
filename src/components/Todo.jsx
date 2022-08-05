import { TodoProvider } from "../context/TodoContext";
import { Form } from "./Form";
import { List } from "./List";
import "../api/todo";

export const Todo = () => {
  return (
    <div>
      <TodoProvider>
        <List />
        <Form />
      </TodoProvider>
    </div>
  );
};
