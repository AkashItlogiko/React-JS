import React, { useState } from 'react';
import User from './User';

const Users = () => {
  const [userName, setUserName] = useState('Anisul Islam');
  return (
    <>
      <User userName={userName} />
    </>
  );
};

export default Users;
