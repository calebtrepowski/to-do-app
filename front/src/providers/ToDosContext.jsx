import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const [todosCurrentFolder, setTodosCurrentFolder] = useState([]);
  const [folders, setFolders] = useState([]);

  const getFolders = async () => {
    try {
      // const response = await axios.get(
      //   `${process.env.REACT_APP_URL_API}/folder`
      // );
      const response = await axios.get("/folder");
      console.log(response.data);
      setFolders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <ToDoContext.Provider
      value={[
        todosCurrentFolder,
        setTodosCurrentFolder,
        folders,
        setFolders,
        getFolders,
      ]}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};
