import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setNewsData(json.results);
      } catch (err) {
        setError(err?.message || "Error, Could not fetch the data!");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return {
    newsData,
    loading,
    error,
  };
};

export default useFetchData;
