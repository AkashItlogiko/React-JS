import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import '../App.css';

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
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={countries} />}
    </>
  );
};

export default Countery;
