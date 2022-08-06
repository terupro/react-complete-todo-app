import React, { useState } from "react";
import todoApi from "../api/todo";
import { useDispatchTodos } from "../context/TodoContext";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const StyledItemArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  height: 50px;
  margin: 15px 20px;
  padding: 10px 20px;
  border-radius: 9999px;
  background-color: #eeeeee;
  border: ${(props) => (props.editing ? "5px solid #000" : "none")};
  transition: all 0.5s;
`;

const StyledButton = styled.button`
  width: 15%;
  height: 50px;
  padding-top: 5px;
  font-size: 20px;
  border-radius: 9999px;
  color: #eeeeee;
  background: #333333;
  border: #333333 solid 2px;
  transition: 0.5s;
  :hover {
    color: #333333;
    background: #eeeeee;
    cursor: pointer;
    transition: all 0.5s;
  }
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledContent = styled.div`
  height: 100%;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
`;

const StyledInput = styled.input`
  font-size: 25px;
  font-weight: 500;
  background: #eeeeee;
  cursor: pointer;
  border: none;
  outline: 0;
`;

export const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const toggleEditMode = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    todoApi.update(newTodo).then(() => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    todoApi.update(newTodo).then(() => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };

  const deleteTodo = () => {
    todoApi.delete(todo).then(() => {
      dispatch({ type: "todo/delete", todo: todo });
    });
  };

  return (
    <div>
      <StyledItemArea id={todo.id} editing={todo.editing}>
        <StyledButton onClick={() => deleteTodo()}>
          <FaCheck />
        </StyledButton>
        <StyledForm onSubmit={confirmContent}>
          <StyledContent onDoubleClick={toggleEditMode}>
            {todo.editing ? (
              <StyledInput
                type="text"
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
              ></StyledInput>
            ) : (
              todo.content
            )}
          </StyledContent>
        </StyledForm>
      </StyledItemArea>
    </div>
  );
};
