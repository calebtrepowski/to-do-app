import { ToDoList } from "./components";
import { ToDoProvider } from "./providers";
function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
