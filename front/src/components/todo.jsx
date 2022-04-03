import { useState } from "react";
import axios from "axios";

const ToDo = ({ completed, body, id, getData }) => {
  const [editing, setEditing] = useState(false);

  const [_completed, setCompleted] = useState(completed);
  const [newBody, setnewBody] = useState(body);

  const onCheckChange = async (e) => {
    setCompleted(e.target.checked);
    try {
      const response = await axios.put(`/todo/${id}`, {
        completed: e.target.checked,
      });
      console.log(response);
      // getData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setnewBody(e.target.value);
  };
  const handleBlur = (e) => {
    setEditing(false);
  };

  const handleSubmit = async (e) => {
    console.log(editing);
    e.preventDefault();
    if (!editing) {
      const bodyRequest = { body: newBody };
      console.log(bodyRequest);
      try {
        const response = await axios.put(`/todo/${id}`, bodyRequest);
        console.log(response);
        setEditing(false);
        getData();
      } catch (err) {
        console.log(err);
      }
      return;
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/todo/${id}`);
      // console.log(response);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo flex flex-cross-center">
      <input
        type="checkbox"
        name="completed"
        checked={_completed}
        onChange={onCheckChange}
      />

      {editing ? (
        <>
          <input
            className="edit-text full-width font-source-sans"
            type="text"
            name="todo-text"
            value={newBody}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </>
      ) : (
        <>
          <p className="todo-body full-width font-source-sans">{`${body}  `}</p>
        </>
      )}

      <button
        className={`todo-btn no-border box-shadow-1 border-radius flex flex-center transition-2 bg-color-accent-hover hover-pointer`}
        onClick={() => {
          setEditing(true);
        }}
        title="Edit"
      >
        <i className="fa fa-pencil no-padding" aria-hidden="true"></i>
      </button>
      <button className={`todo-btn no-border box-shadow-1 border-radius flex flex-center transition-2 bg-color-accent-hover hover-pointer`} onClick={handleSubmit} title="Save">
        <i className={"fa fa-floppy-o"} aria-hidden="true"></i>
      </button>

      <button className="delete-todo flex flex-center transition-2 bg-color-danger-hover hover-pointer" onClick={handleDelete}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ToDo;
