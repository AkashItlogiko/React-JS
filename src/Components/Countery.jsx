import React, { useEffect, useState } from 'react';

const url = 'https://restcountries.com/v3.1/all';

const Countery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async url => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      console.log(countries);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <h1>Countery App</h1>
      {isLoading && <h2>Lodoing...</h2>}
    </>
  );
};

export default Countery;
