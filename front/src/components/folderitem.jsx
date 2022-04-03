import { Link } from "react-router-dom";

const FolderItem = ({ id, name }) => {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <Link to={`/folder/${id}`} className="folder-item flex flex-row flex-cross-center flex-main-between full-width font-source-sans no-decoration transition-1" onClick={handleClick}>
      <h2 className="folder-item-title no-margin hover-pointer no-select">{name}</h2>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </Link>
  );
};
export default FolderItem;
