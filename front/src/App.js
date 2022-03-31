import { ToDoList, FolderList, AddFolder } from "./components";
import { ToDoProvider } from "./providers";
function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <h1 className="header-title">TODOs App</h1>
        <AddFolder />
        <FolderList />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
