import React, { useState } from "react";

export const Item = ({ todo, deleteTodo, updateTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);

  const editMode = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  return (
    <div>
      <div id={todo.id}>
        <form onSubmit={confirmContent}>
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

        <button onClick={() => deleteTodo(todo.id)}>OK</button>
      </div>
    </div>
  );
};
