/*
todo = {
  completed: false,
  id: 5,
  text: "Buy groceries",
}; */

import { useState } from "react";

const ToDo = ({ completed, body, id }) => {
  const [editing, setEditing] = useState(false);
  const [_completed, setCompleted] = useState(completed);
  const [newBody, setnewBody] = useState(body);
  const editTextValue = (e) => {
    setEditing(true);
  };

  const onCheckChange = (e) => {
    // console.log(e.target.checked);
    setCompleted(e.target.checked);
  };

  const handleChange = (e) => {
    setnewBody(e.target.value);
  };
  const handleBlur = (e) => {
    setEditing(false);
  };

  const handleSubmit = () => {
    setEditing(false);
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        name="completed"
        checked={_completed}
        onChange={onCheckChange}
      />

      {editing ? (
        <>
          <input
            className="edit-text"
            type="text"
            name="todo-text"
            value={newBody}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button className="edit-todo-btn" onClick={handleSubmit} title="Save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </>
      ) : (
        <>
          <p>
            {`${body}  `}
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              onClick={editTextValue}
            ></i>
          </p>
        </>
      )}

      <button className="delete-todo">
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ToDo;
