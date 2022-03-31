import { useState, useContext } from "react";
import { ToDoContext } from "../providers";
import axios from "axios";

const AddFolder = () => {
  const [, , , , getFolders] = useContext(ToDoContext);

  const [newFolderName, setNewFolderName] = useState("");

  const handleChange = (event) => {
    setNewFolderName(event.target.value);
  };

  const submitItem = async (e) => {
    e.preventDefault();
    if (newFolderName === "") {
      console.log("ERROR!");
      return;
    }
    const requestBody = { name: newFolderName };

    try {
      const response = await axios.post("/folder", requestBody);
      console.log(response);
      getFolders();
    } catch (error) {
      console.error(error);
    }
    setNewFolderName("");
  };

  return (
    <>
      <form action="#" className="add-new-item">
        <div className="fields">
          <input
            type="text"
            value={newFolderName}
            onChange={handleChange}
            name="newFolderName"
            id="new-folder-text"
            placeholder="New folder name"
            className="new-item-text new-item-field"
            autoComplete="off"
            autoFocus
            required
          />
        </div>
        <div className="add-item-btn-container">
          <button
            className="add-item-btn"
            title="Add Folder"
            onClick={submitItem}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddFolder;
