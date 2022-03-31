import { Link } from "react-router-dom";

const FolderItem = ({ id, name }) => {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <Link to={`/folder/${id}`} className="folder-item" onClick={handleClick}>
      <h2>{name}</h2>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </Link>
  );
};
export default FolderItem;
