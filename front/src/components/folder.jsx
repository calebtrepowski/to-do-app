import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { ToDoContext } from "../providers";
import ErrorPage from "./errorpage";
import ToDo from "./todo";
import { useInit } from "../hooks";

const Folder = () => {
  let { id } = useParams();
  id = parseInt(id, 10);

  const [, , folders] = useContext(ToDoContext);

  const getTodos = async () => {
    try {
      const response = await axios.get(`/todo/fromFolder/${id}`);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [todos, setTodos] = useState([]);

  const [resetInit] = useInit(getTodos);

  const { name } =
    folders !== undefined
      ? folders.find((o) => o.id === id)
      : { name: undefined };

  useEffect(() => {
    window.scrollTo(0, 0);
    resetInit();
  }, [resetInit]);
  //   }, [getTodos]);

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
          <AddTodo folderId={id} getTodos={getTodos} />
          <div className="todo-list">
            {todos.length === 0 && (
              <>
                <p>There are no TODOs here. Create one</p>
              </>
            )}
            {todos.length !== 0 && (
              <>
                {todos.map((todo) => (
                  <ToDo {...todo} key={todo.id} />
                ))}
              </>
            )}
          </div>
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

const AddTodo = ({ folderId, getTodos }) => {
  const [newTodoBody, setNewTodoBody] = useState("");
  const handleChange = (e) => {
    setNewTodoBody(e.target.value);
  };

  const addTodo = async () => {
    const requestBody = {
      body: newTodoBody,
      completed: false,
      folder: folderId,
    };
    try {
      const response = await axios.post("/todo", requestBody);
      console.log(response);
      setNewTodoBody("");
      getTodos();
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };
  return (
    <form action="#" className="add-todo">
      <div className="fields">
        <input
          type="text"
          value={newTodoBody}
          onChange={handleChange}
          name="newFolderName"
          id="new-todo-text"
          placeholder="New TODO"
          className="new-todo-text"
          autoComplete="off"
          autoFocus
          required
        />
      </div>
      <div className="add-item-btn-container">
        <button
          className="add-item-btn"
          title="Add TODO"
          onClick={handleSubmit}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default Folder;
