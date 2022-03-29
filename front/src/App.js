import { useState } from "react";
import { ToDo, ToDoList } from "./components";

const mock_todos = [
  {
    id: 3,
    finished: true,
    text: "Write to candidates",
  },
  {
    id: 4,
    finished: false,
    text: "Prepare weekly report",
  },
  {
    finished: false,
    id: 5,
    text: "Buy groceries",
  },
];

function App() {
  const [todos, setTodos] = useState(mock_todos);
  return (
    <div className="App">
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
