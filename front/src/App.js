import { useState } from "react";
import { ToDoList, AddToDo } from "./components";
import { ToDoProvider } from "./providers";
function App() {
  const [isAddingTodo, setIsAddingTodo] = useState(true);

  const setAddingTodo = () => {
    setIsAddingTodo((prev) => !prev);
  };

  return (
    <div className="App">
      <ToDoProvider>
        <h1 className="header-title">TODOs App</h1>
        {isAddingTodo ? (
          <>
            <AddToDo />
          </>
        ) : (
          <>
            <AddToDo />
          </>
        )}
        <p className="change-adding" onClick={setAddingTodo}>
          <u>Or create new {isAddingTodo ? "Folder" : "TODO"}</u>
        </p>

        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
