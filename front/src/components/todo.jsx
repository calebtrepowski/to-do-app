/*
todo = {
  finished: false,
  id: 5,
  text: "Buy groceries",
}; */

const ToDo = ({ finished, text, id }) => {
  return (
    <div>
      <input type="checkbox" name="finished" checked={finished} />
      <p>{text}</p>
      <input type="button" value="Edit" />
    </div>
  );
};

export default ToDo;
