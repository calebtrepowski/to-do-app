import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import ErrorPage from "./errorpage";
import ToDo from "./todo";

const Folder = () => {
  let { id } = useParams();
  id = useMemo(() => {
    return parseInt(id, 10);
  }, [id]);

  const isMounted = useRef(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [deleted, setDeleted] = useState(false);

  const getData = useCallback(async () => {
    if (isMounted.current) {
      (async () => {
        try {
          const response = await axios.get(`/todo/fromFolder/${id}`);
          const response2 = await axios.get("/folder");
          const currentFolder = response2.data.find((o) => o.id === id);
          setName(currentFolder.name);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id]);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     (async () => {
  //       try {
  //         const response = await axios.get(`/todo/fromFolder/${id}`);
  //         const response2 = await axios.get("/folder");

  //         const currentFolder = response2.data.find((o) => o.id === id);
  //         setName(currentFolder.name);
  //         setData(response.data);
  //       } catch (err) {
  //         setError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     })();
  //   }
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [isMounted, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [getData]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/folder/${id}`);
      console.log(response);
      // getData();
      setDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {" "}
      {deleted && <Navigate to="/" />}
      {name !== undefined && (
        <div className="folder-page full-width">
          <div className="back-to-main flex flex-cross-center flex-main-between">
            <Link to="/" className="link no-decoration">
              <i className="fa fa-chevron-left"></i>Back
            </Link>
            <button
              className="delete-folder no-border box-shadow-1 border-radius hover-pointer transition-2 bg-color-danger-hover"
              title="Delete folder and all its content"
              onClick={handleDelete}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
          <FolderTitle name={name} id={id} />
          <AddTodo folderId={id} getTodos={getData} />
          <div className="todo-list flex flex-column flex-cross-stretch">
            {loading && <div>Loading data...</div>}

            {!loading && data.length === 0 && (
              <>
                <p>There are no TODOs here. Create one</p>
              </>
            )}
            {!loading && data.length !== 0 && (
              <>
                {data.map((todo) => (
                  <ToDo {...todo} key={todo.id} getData={getData} />
                ))}
              </>
            )}
            {error && (
              <div>
                There was an error, here are the details
                <br /> {error}
              </div>
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
  // const [newName, setNewName] = useState(name);

  // const getFolderName = () => {};
  // const handleChange = (e) => {
  //   setNewName(e.target.value);
  // };

  // const handleFocus = (e) => {
  //   e.target.select();
  // };

  // const toggleIsEditing = () => {
  //   setIsEditing((prev) => !prev);
  // };

  const handleBlur = () => {
    setIsEditing(false);
  };

  // const handleFolderNameChanged = async (e) => {
  //   setIsEditing(false);
  //   e.preventDefault();
  //   const requestBody = { name: newName };
  //   try {
  //     console.log(requestBody);
  //     const response = await axios.put(`/folder/${id}`, requestBody);
  //     console.log(response);
  //     getFolderName();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     // setLoading(false);
  //     setNewName("");
  //   }
  //   // console.log(newName);
  // };

  return (
    <div className="folder-title text-center" onBlur={handleBlur}>
      {!isEditing && (
        <h1>
          {name}&nbsp;&nbsp;
          {/* <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={toggleIsEditing}
          ></i> */}
        </h1>
      )}
      {/* {isEditing && (
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
          <button onClick={handleFolderNameChanged} title="Save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </div>
      )} */}
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
      <div className="fields full-width">
        <input
          type="text"
          value={newTodoBody}
          onChange={handleChange}
          name="newFolderName"
          id="new-todo-text"
          placeholder="New TODO"
          className="new-todo-text full-width box-shadow-1 font-source-sans border-radius"
          autoComplete="off"
          autoFocus
          required
        />
      </div>
      <div className="add-item-btn-container flex flex-main-end">
        <button
          className="add-item-btn no-border box-shadow-1 border-radius flex flex-center transition-1 hover-pointer bg-color-accent-hover"
          title="Add TODO"
          onClick={handleSubmit}
        >
          <i className="fa fa-plus no-padding"></i>
        </button>
      </div>
    </form>
  );
};

export default Folder;
