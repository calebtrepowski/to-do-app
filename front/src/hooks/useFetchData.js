import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (props) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `${process.env.REACT_APP_URL_API}/${props?.endpoint || ""}`
        );
        // console.log(request);
        setData(request.data);
        setStatus(request.status);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [props?.endpoint]);

  return { data, status };
};

export default useFetchData;
