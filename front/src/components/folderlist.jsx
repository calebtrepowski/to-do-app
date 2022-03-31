import { useContext } from "react";
import { ToDoContext } from "../providers";

const FolderList = () => {
  const [, , folders] = useContext(ToDoContext);

  return (
    <div className="folder-list">
      {folders.length > 0 ? "hay carpetas" : <NoFoldersMessage />}
    </div>
  );
};

const NoFoldersMessage = () => {
  return <p>There are no folders. Please create one.</p>;
};

export default FolderList;
