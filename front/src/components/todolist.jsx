import { useContext } from "react";
import { ToDoContext } from "../providers";
import ToDo from "./todo";

const ToDoList = () => {
//   const [todos, setTodos] = useContext(ToDoContext);
  const [todos] = useContext(ToDoContext);
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <ToDo {...todo} key={todo.id}/>
      ))}
    </div>
  );
};
export default ToDoList;
