import { ToDo } from "./components";

const todo = {
  finished: false,
  id: 5,
  text: "Buy groceries",
};

function App() {
  return (
    <div className="App">
      <ToDo {...todo} />
    </div>
  );
}

export default App;
