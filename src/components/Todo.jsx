import { TodoProvider } from "../context/TodoContext";
import { Form } from "./Form";
import { List } from "./List";

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
