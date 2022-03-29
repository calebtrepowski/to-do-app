import { ToDoList, AddToDo } from "./components";
import { ToDoProvider } from "./providers";
function App() {
  // console.log(process.env.REACT_APP_URL_API);
  return (
    <div className="App">
      <ToDoProvider>
        <h1>To-dos</h1>
        <AddToDo />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
