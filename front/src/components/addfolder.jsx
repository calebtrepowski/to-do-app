import { useState, useRef } from "react";
import axios from "axios";

const AddFolder = ({ getFolders }) => {
  const [newFolderName, setNewFolderName] = useState("");
  const isMounted = useRef(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setNewFolderName(event.target.value);
  };

  const submitItem = async (e) => {
    e.preventDefault();
    const requestBody = { name: newFolderName };
    if (isMounted.current)
      try {
        setLoading(true);
        await axios.post("/folder", requestBody);
        getFolders();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setNewFolderName("");
      }
  };

  return (
    <>
      <form
        action="#"
        className="add-new-item flex flex-cross-stretch flex-main-center full-width no-padding-lg"
      >
        <div className="fields flex flex-column flex-main-evenly full-width">
          <input
            type="text"
            value={newFolderName}
            onChange={handleChange}
            name="newFolderName"
            id="new-folder-text"
            placeholder="New folder name"
            className="new-item-field box-shadow-1 no-border font-source-sans border-radius"
            autoComplete="off"
            autoFocus
            required
          />
        </div>
        <div className="add-item-btn-container flex-cross-item-center full-width flex flex-main-center">
          <button
            className="add-item-btn bg-color-accent-hover no-border box-shadow-1 full-width flex flex-center hover-pointer border-radius transition-2"
            title="Add Folder"
            disabled={loading}
            onClick={submitItem}
          >
            <i className={`fa fa-${loading ? "spinner" : "plus"} no-padding`}></i>
          </button>
        </div>
        {error && (
          <div>
            Oops! There's an error.
            <br />
            {error}
          </div>
        )}
      </form>
    </>
  );
};

export default AddFolder;
