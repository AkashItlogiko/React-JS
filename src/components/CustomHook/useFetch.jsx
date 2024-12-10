import React, { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  const [isLodingh, setIsLoding] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('feching is not sucessfull');
        } else {
          return res.json();
        }
      })
      .then(data => {
        setData(data);
        setIsLoding(false);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setIsLoding(false);
      });
  }, [url]);

  return { data, isLodingh, error };
};

export default useFetch;
