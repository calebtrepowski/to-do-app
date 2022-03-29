import { useContext } from "react";
import { ToDoContext } from "../providers";
import ToDoFolder from "./todofolder";


const ToDoList = () => {
//   const [todos, setTodos] = useContext(ToDoContext);
  const [todos] = useContext(ToDoContext);
  return (
    <div className="todolist">
      {todos.map((folder) => (
          <ToDoFolder {...folder} key={folder.id}/>
      ))}
    </div>
  );
};
export default ToDoList;
