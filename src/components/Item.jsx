import React, { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

export const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const editMode = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const deleteTodo = () => {
    dispatch({ type: "todo/delete", todo: todo });
  };

  return (
    <div>
      <div id={todo.id}>
        <form onSubmit={confirmContent} style={{ display: "inline" }}>
          <h3 onDoubleClick={editMode} style={{ display: "inline" }}>
            {todo.editing ? (
              <input
                style={{ color: "#000" }}
                type="text"
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
              />
            ) : (
              todo.content
            )}
          </h3>
        </form>
        <button onClick={() => deleteTodo()}>OK</button>
      </div>
    </div>
  );
};
