import { useState, createContext } from "react";

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

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const [todos, setTodos] = useState(mock_todos);

  return (
    <ToDoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
