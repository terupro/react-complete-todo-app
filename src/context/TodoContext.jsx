import { createContext, useContext, useEffect, useReducer } from "react";
import todoApi from "../api/todo";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/init":
      return [...action.todos];
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    todoApi.getAll().then((todos) => {
      dispatch({ type: "todo/init", todos: todos });
    });
  }, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
export const useDispatchTodos = () => useContext(TodoDispatchContext);
