import ToDo from "./todo";

const ToDoList = ({ todos }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <ToDo {...todo} />
      ))}
    </div>
  );
};
export default ToDoList;
