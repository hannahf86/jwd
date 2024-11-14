import { useEffect, useState } from "react";

const useFetch = () => {
  const url = "http://localhost:1337/api/posts";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData?.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log("Oh no! There is an error!", error.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
export default useFetch;
