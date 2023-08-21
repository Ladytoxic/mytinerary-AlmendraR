import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = ({ URL_API }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(URL_API)
      .then(response => {
        if (response.data.success) {
          setData(response.data);
        }
      })
      .catch(err => {
        setData(null);
        setError(err.response);
      })
  },
    [URL_API]
  );

  return { data, error };
}

export default useFetch;