import { useContext, useRef } from "react";
import { ToDoContext } from "../providers";
import FolderItem from "./folderitem";
import { useFetch } from "../hooks";

const FolderList = () => {
  const isComponentMounted = useRef(true);
  const {
    data: folders,
    loading,
    error,
  } = useFetch("/folder", isComponentMounted, []);

  return (
    <div className="folder-list">
      {loading && <div>Loading data...</div>}
      {!loading && folders.length > 0 && (
        <>
          {folders.map((folder) => (
            <FolderItem key={folder.id} {...folder} />
          ))}
        </>
      )}
      {!loading && folders.length === 0 && <NoFoldersMessage />}
      {error && (
        <div>
          There was an error, here are the details
          <br /> {error}
        </div>
      )}
    </div>
  );
};

const NoFoldersMessage = () => {
  return <p>There are no folders. Please create one.</p>;
};

export default FolderList;
