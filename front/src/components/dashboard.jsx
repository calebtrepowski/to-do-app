import AddFolder from "./addfolder";
import FolderList from "./folderlist";
const Dashboard = () => {
  return (
    <>
      <h1 className="header-title">TODOs App</h1>
      <AddFolder />
      <FolderList />
    </>
  );
};

export default Dashboard;
