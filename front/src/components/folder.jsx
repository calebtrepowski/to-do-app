const Folder = ({ id, name }) => {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <div className="folder-item" onClick={handleClick}>
      <h2>{name}</h2>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
};
export default Folder;
