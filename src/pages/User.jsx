import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
  const [searchParams, setsearchParams] = useSearchParams();

  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setsearchParams({ name: name });
  };

  // const { userid } = useParams();
  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Find User</button>
      </form>
      {/* <h2>{searchParams.get('id')}</h2>
      <h2>{searchParams.get('age')}</h2>
      <h2>{searchParams.get('name')}</h2> */}
    </div>
  );
};

export default User;
