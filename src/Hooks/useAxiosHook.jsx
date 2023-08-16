import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosHook = ({ URL_API }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(URL_API)
      .then(response => setData(response.data))
      .catch(err => setError(err))
  },
    [URL_API]
  );

  return { data, error };
}

export default useAxiosHook;
