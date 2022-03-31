import { useContext } from "react";
import { ToDoContext } from "../providers";
import Folder from "./folder";

const FolderList = () => {
  const [, , folders] = useContext(ToDoContext);

  return (
    <div className="folder-list">
      {folders.length > 0 ? (
        <>
          {folders.map((folder) => (
            <Folder key={folder.id} {...folder} />
          ))}
        </>
      ) : (
        <NoFoldersMessage />
      )}
    </div>
  );
};

const NoFoldersMessage = () => {
  return <p>There are no folders. Please create one.</p>;
};

export default FolderList;
