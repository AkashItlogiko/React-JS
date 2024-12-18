import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import '../App.css';
import Search from './Search';

const url = 'https://restcountries.com/v3.1/all';

const Countery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredcountries, setfilteredCountries] = useState(countries);

  const fetchData = async url => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilteredCountries(data);

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

  const handleRemoveCountery = name => {
    const filter = filteredcountries.filter(
      country => country.name.common !== name
    );
    setfilteredCountries(filter);
  };

  const handleSearch = searchValue => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter(country => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setfilteredCountries(newCountries);
  };

  return (
    <>
      <h1>Countery App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Lodoing...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filteredcountries}
          onRemoveCountry={handleRemoveCountery}
        />
      )}
    </>
  );
};

export default Countery;
