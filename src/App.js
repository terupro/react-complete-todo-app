import "./App.css";
import { Todo } from "./components/Todo";

const App = () => {
  return (
    <div className="App">
      <h1
        style={{
          borderBottom: "1px solid #CCCCCC",
          paddingBottom: "20px",
        }}
      >
        TODO APP
      </h1>
      <Todo />
    </div>
  );
};

export default App;
