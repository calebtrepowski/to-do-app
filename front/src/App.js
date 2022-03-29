import { ToDoList, AddToDo } from "./components";
import { ToDoProvider } from "./providers";
function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <h1>To-dos</h1>
        <AddToDo/>
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
