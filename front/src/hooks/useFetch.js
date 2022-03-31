import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (endpoint, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const response = await axios.get(endpoint);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [endpoint, ref]);

  return { data, error, loading };
};

export default useFetch;
