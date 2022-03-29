import { useContext } from "react";
import { ToDoContext } from "../providers";
const AddToDo = () => {
  //   const [todos, setTodos] = useContext(ToDoContext);
  const [todos] = useContext(ToDoContext);
  return (
    <form action="#" className="add-new-todo">
      <input
        type="text"
        name="new_todo_text"
        id="new_todo_text"
        placeholder="Do laundry"
        autoFocus
        required
      />
      <div className="add-new-todo-folder">
        <label htmlFor="new-todo-folder" id="new-todo-folder-label">
          Folder
        </label>
        <select
          name="new-todo-folder"
          id="new-todo-folder"
          placeholder="Select a folder"
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
      <button>Add</button>
    </form>
  );
};

export default AddToDo;
