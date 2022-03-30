import { useState, useEffect } from "react";
import ToDo from "./todo";

const ToDoFolder = ({ id, name, items }) => {
  const [amountCompleted, setAmountCompleted] = useState(0);

  useEffect(() => {
    let amount = 0;
    items.forEach((v) => {
      if (v.completed) {
        amount++;
      }
    });
    setAmountCompleted(amount);
  }, [items]);
  return (
    <div className="folder">
      <div className="folder-header">
        <h2>{name}</h2>
        <p>
          {amountCompleted}/{items.length}
        </p>
        <button>Delete</button>
      </div>
      {items.map((todo) => (
        <ToDo {...todo} key={todo.id} />
      ))}

      <div></div>
    </div>
  );
};

export default ToDoFolder;
