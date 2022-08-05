import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

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

const todoReducer = (todos, action) => {
  switch (action.type) {
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
  const [todos, dispatch] = useReducer(todoReducer, todoList);

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
