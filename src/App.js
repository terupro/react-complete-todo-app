import styled from "styled-components";
import { Todo } from "./components/Todo";

const StyledAppTitle = styled.h1`
  border-bottom: 2px dashed #cccccc;
  padding-bottom: 20px;
  color: #eeeeee;
`;

const StyledAppArea = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
`;

const App = () => {
  return (
    <StyledAppArea>
      <StyledAppTitle>TODO APP</StyledAppTitle>
      <Todo />
    </StyledAppArea>
  );
};

export default App;
