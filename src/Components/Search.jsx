import React, { useEffect, useState } from 'react';

const Search = props => {
  const [searchtext, setsertext] = useState('');

  const handleChange = e => {
    setsertext(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchtext);
  }, [searchtext]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search Countery"
        value={searchtext}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
