import { useContext, useState, useEffect } from "react";
import { ToDoContext } from "../providers";
import { useParams, Link } from "react-router-dom";
import ErrorPage from "./errorpage";

const Folder = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const [, , folders] = useContext(ToDoContext);
  const { name } =
    folders !== undefined
      ? folders.find((o) => o.id === id)
      : { name: undefined };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {name !== undefined && (
        <div className="App folder-page">
          <div className="back-to-main">
            <Link to="/" className="link">
              <i className="fa fa-chevron-left"></i>Back
            </Link>
            <button
              className="delete-folder"
              title="Delete folder and all its content"
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
          <FolderTitle name={name} id={id} />
        </div>
      )}
      {name === undefined && <ErrorPage />}
    </>
  );
};

const FolderTitle = ({ name, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const toggleIsEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleSubmit = () => {
    if (newName === "") {
      console.error("ERROR!");
      return;
    }
    setIsEditing(false);
    // console.log(newName);
  };
  return (
    <div className="folder-title" onBlur={handleBlur}>
      {!isEditing && (
        <h1>
          {name}&nbsp;&nbsp;
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={toggleIsEditing}
          ></i>
        </h1>
      )}
      {isEditing && (
        <div className="edit-folder">
          <input
            type="text"
            name="folder-name"
            value={newName}
            autoFocus
            onFocus={handleFocus}
            onChange={handleChange}
            autoComplete={"false"}
          />
          <button onClick={handleSubmit} title="Save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Folder;
