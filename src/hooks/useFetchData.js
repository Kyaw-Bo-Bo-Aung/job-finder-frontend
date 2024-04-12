import { useState, useEffect } from 'react';
import httpService from '../services/httpService';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await httpService.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.statusText : error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
