import { useContext } from "react";
import { ToDoContext } from "../providers";
import ToDo from "./todo";

const ToDoList = () => {
  const [todos, setTodos] = useContext(ToDoContext);
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <ToDo {...todo} />
      ))}
    </div>
  );
};
export default ToDoList;
