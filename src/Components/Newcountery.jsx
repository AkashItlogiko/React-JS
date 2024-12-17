import React from 'react';

const Newcountery = props => {
  const { name, flags, capital, population, area } = props.countery;

  return (
    <article>
      <div>
        <img src={flags.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
      </div>
    </article>
  );
};

export default Newcountery;
