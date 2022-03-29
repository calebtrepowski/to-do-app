/*
todo = {
  completed: false,
  id: 5,
  text: "Buy groceries",
}; */

import { useState } from "react";

const ToDo = ({ completed, text, id }) => {
  const [editing, setEditing] = useState(false);
  const editTextValue = (e) => {
    setEditing(true);
  };

  return (
    <div className="todo">
      <input type="checkbox" name="completed" checked={completed} />

      {editing ? (
        <>
          <input className="edit-text" type="text" name="todo-text" value={text} autoFocus/>
          <input type="button" value="Save" />
          <input type="button" value="Cancel" />
        </>
      ) : (
        <>
          <p>{text}</p> <input type="button" value="Edit" onClick={editTextValue}/>
        </>
      )}

      <input type="button" value="Delete" />
    </div>
  );
};

export default ToDo;
