import FolderItem from "./folderitem";

const FolderList = ({ folders, loading, error }) => {
  return (
    <div className="folder-list flex flex-column flex-cross-center no-padding full-width flex-main-start full-height">
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
