import { Outlet } from "react-router-dom";
import { ToDoProvider } from "./providers";
function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <Outlet />
      </ToDoProvider>
    </div>
  );
}

export default App;
