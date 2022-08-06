import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import todoApi from "../api/todo";
import { useDispatchTodos } from "../context/TodoContext";
import { FaPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  height: 50px;
  margin: 20px 20px;
  padding: 15px 20px;
  border-radius: 8px;
  background: #eeeeee;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  padding-left: 15px;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  border: none;
  outline: 0;
`;

const StyledButton = styled.button`
  width: 15%;
  height: 50px;
  font-size: 20px;
  border-radius: 8px;
  padding-top: 5px;
  transition: 0.5s;
  color: #eeeeee;
  background: #333333;
  border: 2px solid #333333;
  :hover {
    transition: all 0.5s;
    color: #333333;
    background: #eeeeee;
    cursor: pointer;
  }
`;

export const Form = () => {
  const [enterdTodo, setEnterdTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();
    if (enterdTodo === "") {
      return toast("Todoを入力してください");
    }
    const newTodo = {
      id: uuidv4(),
      content: enterdTodo,
    };
    todoApi.post(newTodo).then(() => {
      dispatch({ type: "todo/add", todo: newTodo });
      setEnterdTodo("");
    });
  };

  return (
    <div>
      <StyledForm onSubmit={addTodo}>
        <StyledInput
          type="text"
          value={enterdTodo}
          onChange={(e) => setEnterdTodo(e.target.value)}
        />
        <StyledButton>
          <FaPlus />
        </StyledButton>
      </StyledForm>
      <Toaster />
    </div>
  );
};
