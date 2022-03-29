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
const mock_todos_folder = [
  {
    id: 1234,
    name: "Shopping List",
    items: [
      {
        id: 3,
        completed: true,
        text: "Ketchup",
      },
      {
        id: 4,
        completed: false,
        text: "Tomatoes",
      },
      {
        completed: false,
        id: 5,
        text: "Milk",
      },
    ],
  },
  {
    id: 5653,
    name: "Next Lecture",
    items: [
      {
        id: 7,
        completed: true,
        text: "Slides",
      },
      {
        id: 8,
        completed: false,
        text: "Practical example",
      },
    ],
  },
];

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const [todos, setTodos] = useState(mock_todos_folder);

  return (
    <ToDoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
