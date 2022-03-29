import { useState } from "react";
import { ToDo, ToDoList } from "./components";

const mock_todos = [
  {
    id: 3,
    completed: true,
    text: "Write to candidates",
  },
  {
    id: 4,
    completed: false,
    text: "Prepare weekly report",
  },
  {
    completed: false,
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
