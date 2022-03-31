import { useRef, useState, useEffect } from "react";
import AddFolder from "./addfolder";
import FolderList from "./folderlist";
import { useFetch } from "../hooks";
import axios from "axios";
const Dashboard = () => {
  const isMounted = useRef(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [rerender, setRerender] = useState(false);
  // const {
  //   data: folders,
  //   loading,
  //   error,
  // } = useFetch("/folder", isComponentMounted, []);

  // const refetch = () => {
  //   if (isComponentMounted.current) {
  //     console.log("entro al if");
  //     setRerender((prev) => !prev);
  //   }
  // };

  const getData = async () => {
    if (isMounted.current) {
      (async () => {
        try {
          const response = await axios.get("/folder");
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      isMounted.current = false;
    };
  };
  useEffect(() => {
    if (isMounted.current) {
      (async () => {
        try {
          const response = await axios.get("/folder");
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return (
    <>
      <h1
        className="header-title"
        onClick={() => {
          getData();
        }}
      >
        TODOs App
      </h1>
      <AddFolder getFolders={getData} />
      <FolderList folders={data} loading={loading} error={error} />
    </>
  );
};

export default Dashboard;
