import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App flex flex-column flex-cross-center full-width max-width-lg">
      <Outlet />
    </div>
  );
}

export default App;
