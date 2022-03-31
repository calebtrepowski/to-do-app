import { useContext } from "react";
import { ToDoContext } from "../providers";
const AddToDo = () => {
  //   const [todos, setTodos] = useContext(ToDoContext);
  const [todos] = useContext(ToDoContext);
  return (
    <form action="#" className="add-new-item">
      <div className="fields">
        <input
          type="text"
          name="new_todo_text "
          id="new_todo_text"
          placeholder="TODO text"
          className="new-item-text new-item-field"
          autoComplete="off"
          autoFocus
          required
        />

        {/* <label htmlFor="new-todo-folder" id="new-todo-folder-label">
          Folder
        </label> */}
        <select
          name="new-todo-folder"
          id="new-todo-folder"
          placeholder="Select a folder"
          className="new-todo-folder new-item-field"
        >
          {/* <option disabled defaultValue value>
          -- select a folder --
        </option> */}
          {todos.map((folder) => (
            <option value={folder.id} key={folder.id}>
              {folder.name}
            </option>
          ))}
        </select>
      </div>
      <div className="add-item-btn-container">
        <button className="add-item-btn" title="Add TODO">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default AddToDo;
